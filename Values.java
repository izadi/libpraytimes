/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Values.java
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

public final class Values {
	private static Values instance;
	
	private String timePointImsakName = "Imsak";
	private String timePointFajrName = "Fajr";
	private String timePointSunriseName = "Sunrise";
	private String timePointDhuhrName = "Dhuhr";
	private String timePointAsrName = "Asr";
	private String timePointSunsetName = "Sunset";
	private String timePointMaghribName = "Maghrib";
	private String timePointIshaName = "Isha";
	private String timePointMidnightName = "Midnight";
	
	private String asrMethodStandardName = "Standard";
	private String asrMethodHanafiName = "Hanafi";
	private String asrMethodCustomName = "Custom";
	
	private String higherLatituedsMethodNightMiddleName = "Night Middle";
	private String higherLatituedsMethodAngleBasedName = "Angle Based";
	private String higherLatituedsMethodOneSeventhName = "One Seventh";
	private String higherLatituedsMethodNoneName = "None";

	private String midnightMethodStandardName = "Standard";
	private String midnightMethodJafariName = "Jafari";

	private String calcMethodMwlName = "Muslim World League";
	private String calcMethodIsnaName = "Islamic Society of North America (ISNA)";
	private String calcMethodEgyptName = "Egyptian General Authority of Survey";
	private String calcMethodMakkahName = "Umm Al-Qura University, Makkah";
	private String calcMethodKarachiName = "University of Islamic Sciences, Karachi";
	private String calcMethodTehranName = "Institute of Geophysics, University of Tehran";
	private String calcMethodJafariName = "Shia Ithna-Ashari, Leva Institute, Qum";
	private String calcMethodCustomName = "Custom";

	private String imsakTypeTwilightAngleBasedName = "Based on Twilight Angle";
	private String imsakTypeFajrBasedName = "Based on Fajr";

	private String maghribTypeTwilightAngleBasedName = "Based on Twilight Angle";
	private String maghribTypeSunsetBasedName = "Based on Sunset";

	private String ishaTypeTwilightAngleBasedName = "Based on Twilight Angle";
	private String ishaTypeMaghribBasedName = "Based on Maghrib";

	private Values() {}
	
	public static Values getInstance() {
		if (instance == null)
			instance = new Values();
		return instance;
	}

	public String getTimePointImsakName() {
		return timePointImsakName;
	}
	public void setTimePointImsakName(String timePointImsakName) {
		this.timePointImsakName = timePointImsakName;
	}

	public String getTimePointFajrName() {
		return timePointFajrName;
	}
	public void setTimePointFajrName(String timePointFajrName) {
		this.timePointFajrName = timePointFajrName;
	}

	public String getTimePointSunriseName() {
		return timePointSunriseName;
	}
	public void setTimePointSunriseName(String timePointSunriseName) {
		this.timePointSunriseName = timePointSunriseName;
	}

	public String getTimePointDhuhrName() {
		return timePointDhuhrName;
	}
	public void setTimePointDhuhrName(String timePointDhuhrName) {
		this.timePointDhuhrName = timePointDhuhrName;
	}

	public String getTimePointAsrName() {
		return timePointAsrName;
	}
	public void setTimePointAsrName(String timePointAsrName) {
		this.timePointAsrName = timePointAsrName;
	}

	public String getTimePointSunsetName() {
		return timePointSunsetName;
	}
	public void setTimePointSunsetName(String timePointSunsetName) {
		this.timePointSunsetName = timePointSunsetName;
	}

	public String getTimePointMaghribName() {
		return timePointMaghribName;
	}
	public void setTimePointMaghribName(String timePointMaghribName) {
		this.timePointMaghribName = timePointMaghribName;
	}

	public String getTimePointIshaName() {
		return timePointIshaName;
	}
	public void setTimePointIshaName(String timePointIshaName) {
		this.timePointIshaName = timePointIshaName;
	}

	public String getTimePointMidnightName() {
		return timePointMidnightName;
	}
	public void setTimePointMidnightName(String timePointMidnightName) {
		this.timePointMidnightName = timePointMidnightName;
	}

	public String getAsrMethodStandardName() {
		return asrMethodStandardName;
	}
	public void setAsrMethodStandardName(String asrMethodStandardName) {
		this.asrMethodStandardName = asrMethodStandardName;
	}

	public String getAsrMethodHanafiName() {
		return asrMethodHanafiName;
	}
	public void setAsrMethodHanafiName(String asrMethodHanafiName) {
		this.asrMethodHanafiName = asrMethodHanafiName;
	}

	public String getAsrMethodCustomName() {
		return asrMethodCustomName;
	}
	public void setAsrMethodCustomName(String asrMethodCustomName) {
		this.asrMethodCustomName = asrMethodCustomName;
	}

	public String getHigherLatituedsMethodNightMiddleName() {
		return higherLatituedsMethodNightMiddleName;
	}
	public void setHigherLatituedsMethodNightMiddleName(String higherLatituedsMethodNightMiddleName) {
		this.higherLatituedsMethodNightMiddleName = higherLatituedsMethodNightMiddleName;
	}

	public String getHigherLatituedsMethodAngleBasedName() {
		return higherLatituedsMethodAngleBasedName;
	}
	public void setHigherLatituedsMethodAngleBasedName(String higherLatituedsMethodAngleBasedName) {
		this.higherLatituedsMethodAngleBasedName = higherLatituedsMethodAngleBasedName;
	}

	public String getHigherLatituedsMethodOneSeventhName() {
		return higherLatituedsMethodOneSeventhName;
	}
	public void setHigherLatituedsMethodOneSeventhName(String higherLatituedsMethodOneSeventhName) {
		this.higherLatituedsMethodOneSeventhName = higherLatituedsMethodOneSeventhName;
	}

	public String getHigherLatituedsMethodNoneName() {
		return higherLatituedsMethodNoneName;
	}
	public void setHigherLatituedsMethodNoneName(String higherLatituedsMethodNoneName) {
		this.higherLatituedsMethodNoneName = higherLatituedsMethodNoneName;
	}

	public String getMidnightMethodStandardName() {
		return midnightMethodStandardName;
	}
	public void setMidnightMethodStandardName(String midnightMethodStandardName) {
		this.midnightMethodStandardName = midnightMethodStandardName;
	}

	public String getMidnightMethodJafariName() {
		return midnightMethodJafariName;
	}
	public void setMidnightMethodJafariName(String midnightMethodJafariName) {
		this.midnightMethodJafariName = midnightMethodJafariName;
	}

	public String getCalcMethodMwlName() {
		return calcMethodMwlName;
	}
	public void setCalcMethodMwlName(String calcMethodMwlName) {
		this.calcMethodMwlName = calcMethodMwlName;
	}

	public String getCalcMethodIsnaName() {
		return calcMethodIsnaName;
	}
	public void setCalcMethodIsnaName(String calcMethodIsnaName) {
		this.calcMethodIsnaName = calcMethodIsnaName;
	}

	public String getCalcMethodEgyptName() {
		return calcMethodEgyptName;
	}
	public void setCalcMethodEgyptName(String calcMethodEgyptName) {
		this.calcMethodEgyptName = calcMethodEgyptName;
	}

	public String getCalcMethodMakkahName() {
		return calcMethodMakkahName;
	}
	public void setCalcMethodMakkahName(String calcMethodMakkahName) {
		this.calcMethodMakkahName = calcMethodMakkahName;
	}

	public String getCalcMethodKarachiName() {
		return calcMethodKarachiName;
	}
	public void setCalcMethodKarachiName(String calcMethodKarachiName) {
		this.calcMethodKarachiName = calcMethodKarachiName;
	}

	public String getCalcMethodTehranName() {
		return calcMethodTehranName;
	}
	public void setCalcMethodTehranName(String calcMethodTehranName) {
		this.calcMethodTehranName = calcMethodTehranName;
	}

	public String getCalcMethodJafariName() {
		return calcMethodJafariName;
	}
	public void setCalcMethodJafariName(String calcMethodJafariName) {
		this.calcMethodJafariName = calcMethodJafariName;
	}

	public String getCalcMethodCustomName() {
		return calcMethodCustomName;
	}
	public void setCalcMethodCustomName(String calcMethodCustomName) {
		this.calcMethodCustomName = calcMethodCustomName;
	}

	public String getImsakTypeTwilightAngleBasedName() {
		return imsakTypeTwilightAngleBasedName;
	}
	public void setImsakTypeTwilightAngleBasedName(String imsakTypeTwilightAngleBasedName) {
		this.imsakTypeTwilightAngleBasedName = imsakTypeTwilightAngleBasedName;
	}

	public String getImsakTypeFajrBasedName() {
		return imsakTypeFajrBasedName;
	}
	public void setImsakTypeFajrBasedName(String imsakTypeFajrBasedName) {
		this.imsakTypeFajrBasedName = imsakTypeFajrBasedName;
	}

	public String getMaghribTypeTwilightAngleBasedName() {
		return maghribTypeTwilightAngleBasedName;
	}
	public void setMaghribTypeTwilightAngleBasedName(String maghribTypeTwilightAngleBasedName) {
		this.maghribTypeTwilightAngleBasedName = maghribTypeTwilightAngleBasedName;
	}

	public String getMaghribTypeSunsetBasedName() {
		return maghribTypeSunsetBasedName;
	}
	public void setMaghribTypeSunsetBasedName(String maghribTypeSunsetBasedName) {
		this.maghribTypeSunsetBasedName = maghribTypeSunsetBasedName;
	}

	public String getIshaTypeTwilightAngleBasedName() {
		return ishaTypeTwilightAngleBasedName;
	}
	public void setIshaTypeTwilightAngleBasedName(String ishaTypeTwilightAngleBasedName) {
		this.ishaTypeTwilightAngleBasedName = ishaTypeTwilightAngleBasedName;
	}

	public String getIshaTypeMaghribBasedName() {
		return ishaTypeMaghribBasedName;
	}
	public void setIshaTypeMaghribBasedName(String ishaTypeMaghribBasedName) {
		this.ishaTypeMaghribBasedName = ishaTypeMaghribBasedName;
	}
}
