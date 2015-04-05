/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     IshaSetting.java
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

public abstract class IshaSetting {
	public static enum Type {
		TWILIGHT_ANGLE_BASED(Values.getInstance().getIshaTypeTwilightAngleBasedName()),
		MAGHRIB_BASED(Values.getInstance().getIshaTypeMaghribBasedName());

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

	public static class TwilightAngleBased extends IshaSetting {
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
	
	public static class MaghribBased extends IshaSetting {
		private final double minutesAfterMaghrib;

		public MaghribBased(double minutesAfterMaghrib) {
			super(Type.MAGHRIB_BASED);
			this.minutesAfterMaghrib = minutesAfterMaghrib;
		}

		public double getMinutesAfterMaghrib() {
			return minutesAfterMaghrib;
		}

		@Override
		public MaghribBased asMaghribBased() {
			return this;
		}
	}

	private final Type type;
	
	private IshaSetting(Type type) {
		this.type = type;
	}

	public Type getType() {
		return type;
	}

	public TwilightAngleBased asTwilightAngleBased() {
		return null;
	}

	public MaghribBased asMaghribBased() {
		return null;
	}
}
