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

var libpraytimes = libpraytimes || {};

libpraytimes.TimePointMap = function() {
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
      case libpraytimes.TimePoint.IMSAK:
        return imsakValue;
      case libpraytimes.TimePoint.FAJR:
        return fajrValue;
      case libpraytimes.TimePoint.SUNRISE:
        return sunriseValue;
      case libpraytimes.TimePoint.DHUHR:
        return dhuhrValue;
      case libpraytimes.TimePoint.ASR:
        return asrValue;
      case libpraytimes.TimePoint.SUNSET:
        return sunsetValue;
      case libpraytimes.TimePoint.MAGHRIB:
        return maghribValue;
      case libpraytimes.TimePoint.ISHA:
        return ishaValue;
      case libpraytimes.TimePoint.MIDNIGHT:
        return midnightValue;
      };
    };

    var set = function(timePoint, value) {
      switch (timePoint) {
      case libpraytimes.TimePoint.IMSAK:
        imsakValue = value;
        break;
      case libpraytimes.TimePoint.FAJR:
        fajrValue = value;
        break;
      case libpraytimes.TimePoint.SUNRISE:
        sunriseValue = value;
        break;
      case libpraytimes.TimePoint.DHUHR:
        dhuhrValue = value;
        break;
      case libpraytimes.TimePoint.ASR:
        asrValue = value;
        break;
      case libpraytimes.TimePoint.SUNSET:
        sunsetValue = value;
        break;
      case libpraytimes.TimePoint.MAGHRIB:
        maghribValue = value;
        break;
      case libpraytimes.TimePoint.ISHA:
        ishaValue = value;
        break;
      case libpraytimes.TimePoint.MIDNIGHT:
        midnightValue = value;
        break;
      };
    };

    var inmap = function(map) {
      if (imsakValue != undefined)
        imsakValue = map(libpraytimes.TimePoint.IMSAK, imsakValue);
      if (fajrValue != undefined)
        fajrValue = map(libpraytimes.TimePoint.FAJR, fajrValue);
      if (sunriseValue != undefined)
        sunriseValue = map(libpraytimes.TimePoint.SUNRISE, sunriseValue);
      if (dhuhrValue != undefined)
        dhuhrValue = map(libpraytimes.TimePoint.DHUHR, dhuhrValue);
      if (asrValue != undefined)
        asrValue = map(libpraytimes.TimePoint.ASR, asrValue);
      if (sunsetValue != undefined)
        sunsetValue = map(libpraytimes.TimePoint.SUNSET, sunsetValue);
      if (maghribValue != undefined)
        maghribValue = map(libpraytimes.TimePoint.MAGHRIB, maghribValue);
      if (ishaValue != undefined)
        ishaValue = map(libpraytimes.TimePoint.ISHA, ishaValue);
      if (midnightValue != undefined)
        midnightValue = map(libpraytimes.TimePoint.MIDNIGHT, midnightValue);
    };

    var outmap = function(map) {
      var result = create();
      if (imsakValue != undefined)
        result.set(libpraytimes.TimePoint.IMSAK, map(libpraytimes.TimePoint.IMSAK, imsakValue));
      if (fajrValue != undefined)
        result.set(libpraytimes.TimePoint.FAJR, map(libpraytimes.TimePoint.FAJR, fajrValue));
      if (sunriseValue != undefined)
        result.set(libpraytimes.TimePoint.SUNRISE, map(libpraytimes.TimePoint.SUNRISE, sunriseValue));
      if (dhuhrValue != undefined)
        result.set(libpraytimes.TimePoint.DHUHR, map(libpraytimes.TimePoint.DHUHR, dhuhrValue));
      if (asrValue != undefined)
        result.set(libpraytimes.TimePoint.ASR, map(libpraytimes.TimePoint.ASR, asrValue));
      if (sunsetValue != undefined)
        result.set(libpraytimes.TimePoint.SUNSET, map(libpraytimes.TimePoint.SUNSET, sunsetValue));
      if (maghribValue != undefined)
        result.set(libpraytimes.TimePoint.MAGHRIB, map(libpraytimes.TimePoint.MAGHRIB, maghribValue));
      if (ishaValue != undefined)
        result.set(libpraytimes.TimePoint.ISHA, map(libpraytimes.TimePoint.ISHA, ishaValue));
      if (midnightValue != undefined)
        result.set(libpraytimes.TimePoint.MIDNIGHT, map(libpraytimes.TimePoint.MIDNIGHT, midnightValue));
      return result;
    };

    that.get = get;
    that.set = set;
    that.inmap = inmap;
    that.outmap = outmap;

    return that;
  };

  return {
    create: create,
  };
}();
