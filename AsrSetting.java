/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     AsrSetting.java
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

public class AsrSetting {
	public static final AsrSetting STANDARD_METHOD =
		new AsrSetting(Values.getInstance().getAsrMethodStandardName(), 1.0);
	public static final AsrSetting HANAFI_METHOD =
		new AsrSetting(Values.getInstance().getAsrMethodHanafiName(), 2.0);
	
	private final String name;
	private final double shadowFactor;

	private AsrSetting(String name, double shadowFactor) {
		this.name = name;
		this.shadowFactor = shadowFactor;
	}
	public AsrSetting(double shadowFactor) {
		this(Values.getInstance().getAsrMethodCustomName(), shadowFactor);
	}

	public String getName() {
		return name;
	}

	public double getShadowFactor() {
		return shadowFactor;
	}
	
	@Override
	public String toString() {
		return name;
	}
}
