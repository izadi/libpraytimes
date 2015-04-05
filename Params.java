/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Params.java
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

import java.util.Map;
import java.util.EnumMap;

public class Params {
	private Setting setting;
	private int numIterations;
	private Map<TimePoint, Double> offsets;

	public Params() {
		setting = new Setting(CalcMethod.MWL, new ImsakSetting.FajrBased(10.0), new DhuhrSetting(0.0),
			AsrSetting.STANDARD_METHOD, HigherLatitudesSetting.NIGHT_MIDDLE_METHOD);
		numIterations = 1;
		offsets = new EnumMap<TimePoint, Double>(TimePoint.class);
		for (TimePoint t: TimePoint.values())
			offsets.put(t, 0.0);
	}

	public Setting getSetting() {
		return setting;
	}
	public void setSetting(Setting setting) {
		this.setting = setting;
	}

	public int getNumIterations() {
		return numIterations;
	}
	public void setNumIterations(int numIterations) {
		this.numIterations = numIterations;
	}
	
	public double getOffset(TimePoint timePoint) {
		return offsets.get(timePoint);
	}
	public void setOffset(TimePoint timePoint, double offset) {
		offsets.put(timePoint, offset);
	}
}
