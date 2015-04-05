/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     TimePoint.java
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

public enum TimePoint {
	IMSAK(Values.getInstance().getTimePointImsakName()),
	FAJR(Values.getInstance().getTimePointFajrName()),
	SUNRISE(Values.getInstance().getTimePointSunriseName()),
	DHUHR(Values.getInstance().getTimePointDhuhrName()),
	ASR(Values.getInstance().getTimePointAsrName()),
	SUNSET(Values.getInstance().getTimePointSunsetName()),
	MAGHRIB(Values.getInstance().getTimePointMaghribName()),
	ISHA(Values.getInstance().getTimePointIshaName()),
	MIDNIGHT(Values.getInstance().getTimePointMidnightName());

	private final String name;

	private TimePoint(String name) {
		this.name = name; 
	}

	public String getName() {
		return name; 
	}

	@Override
	public String toString() {
		return name;
	}
}
