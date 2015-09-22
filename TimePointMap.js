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

    var inmap = function(map) {
      if (imsakValue != undefined)
        imsakValue = map(praytimes.TimePoint.IMSAK, imsakValue);
      if (fajrValue != undefined)
        fajrValue = map(praytimes.TimePoint.FAJR, fajrValue);
      if (sunriseValue != undefined)
        sunriseValue = map(praytimes.TimePoint.SUNRISE, sunriseValue);
      if (dhuhrValue != undefined)
        dhuhrValue = map(praytimes.TimePoint.DHUHR, dhuhrValue);
      if (asrValue != undefined)
        asrValue = map(praytimes.TimePoint.ASR, asrValue);
      if (sunsetValue != undefined)
        sunsetValue = map(praytimes.TimePoint.SUNSET, sunsetValue);
      if (maghribValue != undefined)
        maghribValue = map(praytimes.TimePoint.MAGHRIB, maghribValue);
      if (ishaValue != undefined)
        ishaValue = map(praytimes.TimePoint.ISHA, ishaValue);
      if (midnightValue != undefined)
        midnightValue = map(praytimes.TimePoint.MIDNIGHT, midnightValue);
    };

    var outmap = function(map) {
      var result = create();
      if (imsakValue != undefined)
        result.set(praytimes.TimePoint.IMSAK, map(praytimes.TimePoint.IMSAK, imsakValue));
      if (fajrValue != undefined)
        result.set(praytimes.TimePoint.FAJR, map(praytimes.TimePoint.FAJR, fajrValue));
      if (sunriseValue != undefined)
        result.set(praytimes.TimePoint.SUNRISE, map(praytimes.TimePoint.SUNRISE, sunriseValue));
      if (dhuhrValue != undefined)
        result.set(praytimes.TimePoint.DHUHR, map(praytimes.TimePoint.DHUHR, dhuhrValue));
      if (asrValue != undefined)
        result.set(praytimes.TimePoint.ASR, map(praytimes.TimePoint.ASR, asrValue));
      if (sunsetValue != undefined)
        result.set(praytimes.TimePoint.SUNSET, map(praytimes.TimePoint.SUNSET, sunsetValue));
      if (maghribValue != undefined)
        result.set(praytimes.TimePoint.MAGHRIB, map(praytimes.TimePoint.MAGHRIB, maghribValue));
      if (ishaValue != undefined)
        result.set(praytimes.TimePoint.ISHA, map(praytimes.TimePoint.ISHA, ishaValue));
      if (midnightValue != undefined)
        result.set(praytimes.TimePoint.MIDNIGHT, map(praytimes.TimePoint.MIDNIGHT, midnightValue));
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
