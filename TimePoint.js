/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     TimePoint.js
 *     Copyright (C) 2015
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

var libpraytimes = libpraytimes || {};

libpraytimes.TimePoint = function() {
  var IMSAK = 'IMSAK';
  var FAJR = 'FAJR';
  var SUNRISE = 'SUNRISE ';
  var DHUHR = 'DHUHR ';
  var ASR = 'ASR ';
  var SUNSET = 'SUNSET ';
  var MAGHRIB = 'MAGHRIB ';
  var ISHA = 'ISHA ';
  var MIDNIGHT = 'MIDNIGHT ';

  return {
    IMSAK: IMSAK,
    FAJR: FAJR,
    SUNRISE: SUNRISE,
    DHUHR: DHUHR,
    ASR: ASR,
    SUNSET: SUNSET,
    MAGHRIB: MAGHRIB,
    ISHA: ISHA,
    MIDNIGHT: MIDNIGHT,
  };
}();
