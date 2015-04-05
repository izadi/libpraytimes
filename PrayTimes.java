/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     PrayTimes.java
 *     Copyright (C) 2012 
 *     Mohsen Izadi <m.izadi@gmail.com>
 *
 * Based On:
 *     PrayTimes.js (v2.3)
 *     Copyright (C) 2007-2011 PrayTimes.org
 *     Hamid Zarrabi-Zadeh
 *
 * License: GNU LGPL v3.0
 *
 * TERMS OF USE:
 *     Permission is granted to use this code, with or 
 *     without modification, in any website or application 
 *     provided that credit is given to the original work 
 *     with a link back to PrayTimes.org.
 *
 * This program is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY. 
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT BLOCK.
 *
 */

package org.praytimes.www;

import java.util.GregorianCalendar;
import java.util.Map;
import java.util.EnumMap;
import java.util.TimeZone;

public class PrayTimes {

	private class SunPosition {
		private final double declination;
		private final double equation;
		
		public SunPosition(double declination, double equaiton) {
			this.declination = declination;
			this.equation = equaiton;
		}
		
		public double getDeclination() {
			return declination;
		}
		
		public double getEquation() {
			return equation;
		}
	}
	
	private Params params;
	
	public PrayTimes(Params params) {
		this.params = params;
	}
	
	public Params getParams() {
		return params;
	}

	private double timeDiff(double time1, double time2) {
		return DegMath.fixHour(time2 - time1);
	}
	
	private double julian(Date date) {
		int month = date.getMonth();
		int year = date.getYear();
		if (month <= 2) {
			year--;
			month += 12;
		}
		int a = year / 100;
		int b = 2 - a + a / 4;
		return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) +
			date.getDay() + b - 1524.5;
	}

	private void dayPortions(Map<TimePoint, Double> times) {
		for (Map.Entry<TimePoint, Double> entry: times.entrySet())
			entry.setValue(entry.getValue() / 24.0);
	}
	
	private SunPosition sunPosition(double jDate) {
		double d = jDate - 2451545.0;
		double g = DegMath.fixAngle(357.529 + 0.98560028 * d);
		double q = DegMath.fixAngle(280.459 + 0.98564736 * d);
		double l = DegMath.fixAngle(q + 1.915 * DegMath.sin(g) + 0.020 * DegMath.sin(2 * g));

		//double r = 1.00014 - 0.01671 * DegMath.cos(g) - 0.00014 * DegMath.cos(2 * g);
		double e = 23.439 - 0.00000036 * d;

		double ra = DegMath.arctan2(DegMath.cos(e) * DegMath.sin(l), DegMath.cos(l)) / 15;
		double eqt = q / 15 - DegMath.fixHour(ra);
		double decl = DegMath.arcsin(DegMath.sin(e) * DegMath.sin(l));

		return new SunPosition(decl, eqt);
	}
	
	private double midDay(double jDate, double time) {
		double eqt = sunPosition(jDate + time).getEquation();
		return DegMath.fixHour(12 - eqt);
	}

	private double sunAngleTime(Coords coords, double jDate, double angle, double time,
		boolean ccw) {
		double decl = sunPosition(jDate + time).getDeclination();
		double noon = midDay(jDate, time);
		double t = 1.0 / 15.0 * DegMath.arccos((-DegMath.sin(angle) - DegMath.sin(decl) *
			DegMath.sin(coords.getLatitude())) / (DegMath.cos(decl) * DegMath.cos(coords.getLatitude())));
		return noon + (ccw ? -t : t);
	}
	
	private double riseSetAngle(Coords coords) {
		double angle = 0.0347 * Math.sqrt(coords.getElevation()); // an approximation
		return 0.833 + angle;
	}
	
	private double asrTime(Coords coords, double jDate, double factor, double time) {
		double decl = sunPosition(jDate + time).getDeclination();
		double angle = -DegMath.arccot(factor + DegMath.tan(Math.abs(coords.getLatitude() - decl)));
		return sunAngleTime(coords, jDate, angle, time, false);
	}
	
	private void computePrayerTimes(Coords coords, double jDate, Map<TimePoint, Double> times) {
		dayPortions(times);
		for (Map.Entry<TimePoint, Double> entry: times.entrySet())
			switch (entry.getKey()) {
			case IMSAK:
				if (params.getSetting().getImsak().getType() == ImsakSetting.Type.TWILIGHT_ANGLE_BASED)
					entry.setValue(sunAngleTime(coords, jDate, params.getSetting().getImsak().asTwilightAngleBased().getTwilightAngle(),
						entry.getValue(), true));
				break;
			case FAJR:
				entry.setValue(sunAngleTime(coords, jDate, params.getSetting().getFajr().getTwilightAngle(), entry.getValue(), true));
				break;
			case SUNRISE:
				entry.setValue(sunAngleTime(coords, jDate, riseSetAngle(coords), entry.getValue(), true));
				break;
			case DHUHR:
				entry.setValue(midDay(jDate, entry.getValue()));
				break;
			case ASR:
				entry.setValue(asrTime(coords, jDate, params.getSetting().getAsr().getShadowFactor(), entry.getValue()));
				break;
			case SUNSET:
				entry.setValue(sunAngleTime(coords, jDate, riseSetAngle(coords), entry.getValue(), false));
				break;
			case MAGHRIB:
				if (params.getSetting().getMaghrib().getType() == MaghribSetting.Type.TWILIGHT_ANGLE_BASED)
					entry.setValue(sunAngleTime(coords, jDate, params.getSetting().getMaghrib().asTwilightAngleBased().getTwilightAngle(),
						entry.getValue(), false));
				break;
			case ISHA:
				if (params.getSetting().getIsha().getType() == IshaSetting.Type.TWILIGHT_ANGLE_BASED)
					entry.setValue(sunAngleTime(coords, jDate, params.getSetting().getIsha().asTwilightAngleBased().getTwilightAngle(),
						entry.getValue(), false));
				break;
			}
	}

	private double nightPortion(double angle, double night) {
		switch (params.getSetting().getHighLats()) {
		case ANGLE_BASED_METHOD:
			return night * angle / 60.0;
		case ONE_SEVENTH_METHOD:
			return night / 7.0;
		default:
			return night / 2.0;
		}
	}
	
	private double adjustHlTime(double time, double base, double angle, double night, boolean ccw) {
		double portion = nightPortion(angle, night);
		double tdiff = ccw ? timeDiff(time, base) : timeDiff(base, time);
		if (Double.isNaN(time) || tdiff > portion)
			time = base + (ccw ? -portion : portion);
		return time;
	}
	
	private void adjustHighLats(Map<TimePoint, Double> times) {
		double nightTime = timeDiff(times.get(TimePoint.SUNSET), times.get(TimePoint.SUNRISE));
		if (params.getSetting().getImsak().getType() == ImsakSetting.Type.TWILIGHT_ANGLE_BASED)
			times.put(TimePoint.IMSAK, adjustHlTime(times.get(TimePoint.IMSAK), times.get(TimePoint.SUNRISE),
				params.getSetting().getImsak().asTwilightAngleBased().getTwilightAngle(), nightTime, true));
		times.put(TimePoint.FAJR, adjustHlTime(times.get(TimePoint.FAJR), times.get(TimePoint.SUNRISE),
			params.getSetting().getFajr().getTwilightAngle(), nightTime, true));
		if (params.getSetting().getIsha().getType() == IshaSetting.Type.TWILIGHT_ANGLE_BASED)
			times.put(TimePoint.ISHA, adjustHlTime(times.get(TimePoint.ISHA), times.get(TimePoint.SUNSET),
				params.getSetting().getIsha().asTwilightAngleBased().getTwilightAngle(), nightTime, false));
		if (params.getSetting().getMaghrib().getType() == MaghribSetting.Type.TWILIGHT_ANGLE_BASED)
			times.put(TimePoint.MAGHRIB, adjustHlTime(times.get(TimePoint.MAGHRIB), times.get(TimePoint.SUNSET),
				params.getSetting().getMaghrib().asTwilightAngleBased().getTwilightAngle(), nightTime, false));
	}
	
	private void adjustTimes(Map<TimePoint, Double> times, Coords coords, double timeZone) {
		for (Map.Entry<TimePoint, Double> entry: times.entrySet())
			entry.setValue(entry.getValue() + timeZone - coords.getLongitude() / 15.0);
		if (params.getSetting().getHighLats() != HigherLatitudesSetting.NONE)
			adjustHighLats(times);
		if (params.getSetting().getImsak().getType() == ImsakSetting.Type.FAJR_BASED)
			times.put(TimePoint.IMSAK, times.get(TimePoint.FAJR) -
				params.getSetting().getImsak().asFajrBased().getMinutesBeforeFajr() / 60.0);
		if (params.getSetting().getMaghrib().getType() == MaghribSetting.Type.SUNSET_BASED)
			times.put(TimePoint.MAGHRIB, times.get(TimePoint.SUNSET) +
				params.getSetting().getMaghrib().asSunsetBased().getMinutesAfterSunset() / 60.0);
		if (params.getSetting().getIsha().getType() == IshaSetting.Type.MAGHRIB_BASED)
			times.put(TimePoint.ISHA, times.get(TimePoint.MAGHRIB) +
				params.getSetting().getIsha().asMaghribBased().getMinutesAfterMaghrib() / 60.0);
		times.put(TimePoint.DHUHR, times.get(TimePoint.DHUHR) + params.getSetting().getDhuhr().getMinutesAfterMidDay() / 60.0);
	}
	
	private void tuneTimes(Map<TimePoint, Double> times) {
		for (Map.Entry<TimePoint, Double> entry: times.entrySet())
			entry.setValue(entry.getValue() + params.getOffset(entry.getKey()) / 60.0);
	}
	
	private Map<TimePoint, Double> computeTimes(Coords coords, double jDate, double timeZone) {
		Map<TimePoint, Double> times = new EnumMap<TimePoint, Double>(TimePoint.class);
		times.put(TimePoint.IMSAK, 5.0);
		times.put(TimePoint.FAJR, 5.0);
		times.put(TimePoint.SUNRISE, 6.0);
		times.put(TimePoint.DHUHR, 12.0);
		times.put(TimePoint.ASR, 13.0);
		times.put(TimePoint.SUNSET, 18.0);
		times.put(TimePoint.MAGHRIB, 18.0);
		times.put(TimePoint.ISHA, 18.0);
		for (int i = 0; i < params.getNumIterations(); i++)
			computePrayerTimes(coords, jDate, times);
		adjustTimes(times, coords, timeZone);
		times.put(TimePoint.MIDNIGHT, params.getSetting().getMidnight() == MidnightSetting.JAFARI_METHOD ?
			times.get(TimePoint.MAGHRIB) + timeDiff(times.get(TimePoint.MAGHRIB), times.get(TimePoint.FAJR)) / 2.0 :
			times.get(TimePoint.SUNSET) + timeDiff(times.get(TimePoint.SUNSET), times.get(TimePoint.SUNRISE)) / 2.0);
		tuneTimes(times);
		return times;
	}
	
	public Map<TimePoint, DateTime> getTimes(Date date, Coords coords, TimeZone timeZone) {
		Map<TimePoint, Double> times = computeTimes(coords, julian(date) - coords.getLongitude() / (15.0 * 24.0),
			timeZone.getOffset(GregorianCalendar.AD, date.getYear(), date.getMonth() - 1, date.getDay(),
				0, 0) / (1000.0 * 60.0 * 60.0));

		Map<TimePoint, DateTime> result = new EnumMap<TimePoint, DateTime>(TimePoint.class);
		for (Map.Entry<TimePoint, Double> entry: times.entrySet()) {
			double h = entry.getValue();
			int hour = (int) Math.floor(h);
			double m = (h - hour) * 60;
			int min = (int) Math.floor(m);
			double s = (m - min) * 60;
			int sec = (int) Math.floor(s);
			int milli = (int) Math.round((s - sec) * 1000);
			result.put(entry.getKey(), new DateTime(date, hour, min, sec, milli));
		}
		return result;
	}
	public Map<TimePoint, DateTime> getTimes(Date date, Coords coords) {
		return getTimes(date, coords, TimeZone.getDefault());
	}
	public Map<TimePoint, DateTime> getTimes(Date date, Coords coords, double timeZone, boolean dst) {
		int hour = (int) Math.floor(timeZone);
		int min = (int) Math.round((timeZone - hour) * 60);
		if (dst) hour++;
		return getTimes(date, coords, TimeZone.getTimeZone(String.format("GMT%1$+d%2$02d", hour, min)));
	}
}
