/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Date.js
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

libpraytimes.Date = function() {
  var create = function(year, month, day) {
    var that = {};

    var getYear = function() {
      return year;
    };

    var getMonth = function() {
      return month;
    };

    var getDay = function() {
      return day;
    };

    that.getYear = getYear;
    that.getMonth = getMonth;
    that.getDay = getDay;

    return that;
  };

  return {
    create: create,
  };
}();
