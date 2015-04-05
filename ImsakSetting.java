/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     ImsakSetting.java
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

public abstract class ImsakSetting {
	public static enum Type {
		TWILIGHT_ANGLE_BASED(Values.getInstance().getImsakTypeTwilightAngleBasedName()),
		FAJR_BASED(Values.getInstance().getImsakTypeFajrBasedName());

		private final String name;

		private Type(String name) {
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

	public static class TwilightAngleBased extends ImsakSetting {
		private final double twilightAngle;

		public TwilightAngleBased(double twilightAngle) {
			super(Type.TWILIGHT_ANGLE_BASED);
			this.twilightAngle = twilightAngle;
		}

		public double getTwilightAngle() {
			return twilightAngle;
		}
		
		@Override
		public TwilightAngleBased asTwilightAngleBased() {
			return this;
		}
	}
	
	public static class FajrBased extends ImsakSetting {
		private final double minutesBeforeFajr;

		public FajrBased(double minutesBeforeFajr) {
			super(Type.FAJR_BASED);
			this.minutesBeforeFajr = minutesBeforeFajr;
		}

		public double getMinutesBeforeFajr() {
			return minutesBeforeFajr;
		}
		
		@Override
		public FajrBased asFajrBased() {
			return this;
		}
	}

	private final Type type;
	
	private ImsakSetting(Type type) {
		this.type = type;
	}

	public Type getType() {
		return type;
	}

	public TwilightAngleBased asTwilightAngleBased() {
		return null;
	}

	public FajrBased asFajrBased() {
		return null;
	}
}
