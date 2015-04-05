/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     DhuhrSetting.java
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

public class DhuhrSetting {
	private final double minutesAfterMidDay;

	public DhuhrSetting(double minutesAfterMidDay) {
		this.minutesAfterMidDay = minutesAfterMidDay;
	}

	public double getMinutesAfterMidDay() {
		return minutesAfterMidDay;
	}
}
