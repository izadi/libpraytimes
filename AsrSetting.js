/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     AsrSetting.js
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

libpraytimes.AsrSetting = function() {
  var create = function(shadowFactor) {
    var that = {};

    var getShadowFactor = function() {
      return shadowFactor;
    };

    that.getShadowFactor = getShadowFactor;

    return that;
  };

  var STANDARD_METHOD = create(1);
  var HANAFI_METHOD = create(2);
  var DEFAULT = STANDARD_METHOD;

  return {
    create: create,
    STANDARD_METHOD: STANDARD_METHOD,
    HANAFI_METHOD: HANAFI_METHOD,
    DEFAULT: DEFAULT,
  };
}();
