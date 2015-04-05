/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     CalcMethod.java
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

public enum CalcMethod {
	MWL(Values.getInstance().getCalcMethodMwlName(), new FajrSetting(18.0), MaghribSetting.DEFAULT,
		new IshaSetting.TwilightAngleBased(17.0), MidnightSetting.STANDARD_METHOD),
	ISNA(Values.getInstance().getCalcMethodIsnaName(), new FajrSetting(15.0), MaghribSetting.DEFAULT,
			new IshaSetting.TwilightAngleBased(15.0), MidnightSetting.STANDARD_METHOD),
	EGYPT(Values.getInstance().getCalcMethodEgyptName(), new FajrSetting(19.5), MaghribSetting.DEFAULT,
		new IshaSetting.TwilightAngleBased(17.5), MidnightSetting.STANDARD_METHOD),
	MAKKAH(Values.getInstance().getCalcMethodMakkahName(), new FajrSetting(18.5), MaghribSetting.DEFAULT,
		new IshaSetting.MaghribBased(90.0), MidnightSetting.STANDARD_METHOD),
	KARACHI(Values.getInstance().getCalcMethodKarachiName(), new FajrSetting(18.0), MaghribSetting.DEFAULT,
		new IshaSetting.TwilightAngleBased(18.0), MidnightSetting.STANDARD_METHOD),
	TEHRAN(Values.getInstance().getCalcMethodTehranName(), new FajrSetting(17.7), new MaghribSetting.TwilightAngleBased(4.5),
		new IshaSetting.TwilightAngleBased(14.0), MidnightSetting.JAFARI_METHOD),
	JAFARI(Values.getInstance().getCalcMethodJafariName(), new FajrSetting(16), new MaghribSetting.TwilightAngleBased(4),
		new IshaSetting.TwilightAngleBased(14.4), MidnightSetting.JAFARI_METHOD),
	CUSTOM(Values.getInstance().getCalcMethodCustomName());

	private final String name;
	private final FajrSetting fajr;
	private final MaghribSetting maghrib;
	private final IshaSetting isha;
	private final MidnightSetting midnight;

	private CalcMethod(String name) {
		this(name, null, null, null, null);
	}
	private CalcMethod(String name, FajrSetting fajr, MaghribSetting maghrib, IshaSetting isha,
		MidnightSetting midnight) {
		this.name = name;
		this.fajr = fajr;
		this.maghrib = maghrib;
		this.isha = isha;
		this.midnight = midnight;
	}

	public String getName() {
		return name; 
	}

	public FajrSetting getFajr() {
		if (fajr == null)
			throw new IllegalStateException("This method does not have fajr settting.");
		return fajr;
	}

	public MaghribSetting getMaghrib() {
		if (maghrib == null)
			throw new IllegalStateException("This method does not have maghrib settting.");
		return maghrib;
	}

	public IshaSetting getIsha() {
		if (maghrib == null)
			throw new IllegalStateException("This method does not have isha settting.");
		return isha;
	}

	public MidnightSetting getMidnight() {
		if (maghrib == null)
			throw new IllegalStateException("This method does not have midnight settting.");
		return midnight;
	}

	@Override
	public String toString() {
		return name;
	}
}
