/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     TuningSetting.js
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

libpraytimes.TuningSetting = function() {
  var create = function() {
    var that = {};

    var offset = {};

    var getOffset = function(timePoint) {
      return offset[timePoint] || 0;
    };

    var setOffset = function(timePoint, newOffset) {
      offset[timePoint] = newOffset;
    };

    that.getOffset = getOffset;
    that.setOffset = setOffset;

    return that;
  };

  return {
    create: create,
  };
}();
