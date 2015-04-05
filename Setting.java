/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Setting.java
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

public class Setting {
	private CalcMethod method;
	private ImsakSetting imsak;
	private FajrSetting fajr;
	private DhuhrSetting dhuhr;
	private AsrSetting asr;
	private MaghribSetting maghrib;
	private IshaSetting isha;
	private MidnightSetting midnight;
	private HigherLatitudesSetting highLats;

	private Setting(CalcMethod method, ImsakSetting imsak, FajrSetting fajr, DhuhrSetting dhuhr, AsrSetting asr,
		MaghribSetting maghrib, IshaSetting isha, MidnightSetting midnight, HigherLatitudesSetting highLats) {
		this.method = method;
		this.imsak = imsak;
		this.fajr = fajr;
		this.dhuhr = dhuhr;
		this.asr = asr;
		this.maghrib = maghrib;
		this.isha = isha;
		this.midnight = midnight;
		this.highLats = highLats;
	}
	public Setting(ImsakSetting imsak, FajrSetting fajr, DhuhrSetting dhuhr, AsrSetting asr, MaghribSetting maghrib,
		IshaSetting isha, MidnightSetting midnight, HigherLatitudesSetting highLats) {
		this(CalcMethod.CUSTOM, imsak, fajr, dhuhr, asr, maghrib, isha, midnight, highLats);
	}
	public Setting(CalcMethod method, ImsakSetting imsak, DhuhrSetting dhuhr, AsrSetting asr,
		HigherLatitudesSetting highLats) {
		this(method, imsak, method.getFajr(), dhuhr, asr, method.getMaghrib(), method.getIsha(),
			method.getMidnight(), highLats);
	}

	public CalcMethod getMethod() {
		return method;
	}
	public void setMethod(CalcMethod method) {
		this.method = method;
		if (method != CalcMethod.CUSTOM)
		{
			fajr = method.getFajr();
			maghrib = method.getMaghrib();
			isha = method.getIsha();
			midnight = method.getMidnight();
		}
	}

	public ImsakSetting getImsak() {
		return imsak;
	}
	public void setImsak(ImsakSetting imsak) {
		this.imsak = imsak;
	}

	public FajrSetting getFajr() {
		return fajr;
	}
	public void setFajr(FajrSetting fajr) {
		if (method != CalcMethod.CUSTOM)
			throw new IllegalStateException("Fajr can only be set for CUSTOM calculation method.");
		this.fajr = fajr;
	}

	public DhuhrSetting getDhuhr() {
		return dhuhr;
	}
	public void setDhuhr(DhuhrSetting dhuhr) {
		this.dhuhr = dhuhr;
	}

	public AsrSetting getAsr() {
		return asr;
	}
	public void setAsr(AsrSetting asr) {
		this.asr = asr;
	}

	public MaghribSetting getMaghrib() {
		return maghrib;
	}
	public void setMaghrib(MaghribSetting maghrib) {
		if (method != CalcMethod.CUSTOM)
			throw new IllegalStateException("Maghrib can only be set for CUSTOM calculation method.");
		this.maghrib = maghrib;
	}

	public IshaSetting getIsha() {
		return isha;
	}
	public void setIsha(IshaSetting isha) {
		if (method != CalcMethod.CUSTOM)
			throw new IllegalStateException("Isha can only be set for CUSTOM calculation method.");
		this.isha = isha;
	}

	public MidnightSetting getMidnight() {
		return midnight;
	}
	public void setMidnight(MidnightSetting midnight) {
		if (method != CalcMethod.CUSTOM)
			throw new IllegalStateException("Midnight can only be set for CUSTOM calculation method.");
		this.midnight = midnight;
	}

	public HigherLatitudesSetting getHighLats() {
		return highLats;
	}
	public void setHighLats(HigherLatitudesSetting highLats) {
		this.highLats = highLats;
	}
}
