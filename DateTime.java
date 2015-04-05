/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     DateTime.java
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

public class DateTime {
	private final Date date;
	private final Time time;

	public DateTime(Date date, Time time) {
		this.date = date;
		this.time = time;
	}
	public DateTime(int year, int month, int day, int hour, int minute, int second, int millisecond) {
		this(new Date(year, month, day), new Time(hour, minute, second, millisecond));
	}
	public DateTime(Date date, int hour, int minute, int second, int millisecond) {
		this(date, new Time(hour, minute, second, millisecond));
	}
	public DateTime(int year, int month, int day, Time time) {
		this(new Date(year, month, day), time);
	}

	public Date getDate() {
		return date;
	}

	public int getYear() {
		return date.getYear();
	}

	public int getMonth() {
		return date.getMonth();
	}

	public int getDay() {
		return date.getDay();
	}

	public Time getTime() {
		return time;
	}

	public int getHour() {
		return time.getHour();
	}
	
	public int getMinute() {
		return time.getMinute();
	}

	public int getSecond() {
		return time.getSecond();
	}

	public int getMillisecond() {
		return time.getMillisecond();
	}
}
