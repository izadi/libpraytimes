/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     TimePointMap.js
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

var praytimes = praytimes || {};

praytimes.TimePointMap = function() {
  var create = function() {
    var that = {};

    var imsakValue;
    var fajrValue;
    var sunriseValue;
    var dhuhrValue;
    var asrValue;
    var sunsetValue;
    var maghribValue;
    var ishaValue;
    var midnightValue;

    var get = function(timePoint) {
      switch (timePoint) {
      case praytimes.TimePoint.IMSAK:
        return imsakValue;
      case praytimes.TimePoint.FAJR:
        return fajrValue;
      case praytimes.TimePoint.SUNRISE:
        return sunriseValue;
      case praytimes.TimePoint.DHUHR:
        return dhuhrValue;
      case praytimes.TimePoint.ASR:
        return asrValue;
      case praytimes.TimePoint.SUNSET:
        return sunsetValue;
      case praytimes.TimePoint.MAGHRIB:
        return maghribValue;
      case praytimes.TimePoint.ISHA:
        return ishaValue;
      case praytimes.TimePoint.MIDNIGHT:
        return midnightValue;
      };
    };

    var set = function(timePoint, value) {
      switch (timePoint) {
      case praytimes.TimePoint.IMSAK:
        imsakValue = value;
        break;
      case praytimes.TimePoint.FAJR:
        fajrValue = value;
        break;
      case praytimes.TimePoint.SUNRISE:
        sunriseValue = value;
        break;
      case praytimes.TimePoint.DHUHR:
        dhuhrValue = value;
        break;
      case praytimes.TimePoint.ASR:
        asrValue = value;
        break;
      case praytimes.TimePoint.SUNSET:
        sunsetValue = value;
        break;
      case praytimes.TimePoint.MAGHRIB:
        maghribValue = value;
        break;
      case praytimes.TimePoint.ISHA:
        ishaValue = value;
        break;
      case praytimes.TimePoint.MIDNIGHT:
        midnightValue = value;
        break;
      };
    };

    that.get = get;
    that.set = set;

    return that;
  };

  return {
    create: create,
  };
}();
