/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     HigherLatitudesSetting.java
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

public enum HigherLatitudesSetting {
	NIGHT_MIDDLE_METHOD(Values.getInstance().getHigherLatituedsMethodNightMiddleName()),
	ANGLE_BASED_METHOD(Values.getInstance().getHigherLatituedsMethodAngleBasedName()),
	ONE_SEVENTH_METHOD(Values.getInstance().getHigherLatituedsMethodOneSeventhName()),
	NONE(Values.getInstance().getHigherLatituedsMethodNoneName());

	private final String name;

	private HigherLatitudesSetting(String name) {
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
