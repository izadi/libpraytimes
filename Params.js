/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Params.js
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

praytimes.Params = function() {
  var create = function(setting, numIterations, offsets) {
    var that = {};

    setting = setting || praytimes.Setting.create();
    numIterations = numIterations || 1;
    offsets = offsets || {};
    offsets[praytimes.TimePoint.IMSAK] = offsets[praytimes.TimePoint.IMSAK] || 0;
    offsets[praytimes.TimePoint.FAJR] = offsets[praytimes.TimePoint.FAJR] || 0;
    offsets[praytimes.TimePoint.SUNRISE] = offsets[praytimes.TimePoint.SUNRISE] || 0;
    offsets[praytimes.TimePoint.DHUHR] = offsets[praytimes.TimePoint.DHUHR] || 0;
    offsets[praytimes.TimePoint.ASR] = offsets[praytimes.TimePoint.ASR] || 0;
    offsets[praytimes.TimePoint.SUNSET] = offsets[praytimes.TimePoint.SUNSET] || 0;
    offsets[praytimes.TimePoint.MAGHRIB] = offsets[praytimes.TimePoint.MAGHRIB] || 0;
    offsets[praytimes.TimePoint.ISHA] = offsets[praytimes.TimePoint.ISHA] || 0;
    offsets[praytimes.TimePoint.MIDNIGHT] = offsets[praytimes.TimePoint.MIDNIGHT] || 0;

    var getSetting = function() {
      return setting;
    };

    var getNumIterations = function() {
      return numIterations;
    };

    var setNumIterations = function(newNumIterations) {
      numIterations = newNumIterations;
    };

    var getOffset = function(timePoint) {
      return offsets[timePoint];
    };

    var setOffset = function(timePoint, offset) {
      offsets[timePoint] = offset;
    };

    that.getSetting = getSetting;
    that.getNumIterations = getNumIterations;
    that.setNumIterations = setNumIterations;
    that.getOffset = getOffset;
    that.setOffset = setOffset;

    return that;
  };

  return {
    create: create,
  };
}();
