/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Coords.js
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

praytimes.Coords = function() {
  var create = function(latitude, longitude, elevation) {
    var that = {};

    elevation = elevation || 0;

    var getLatitude = function() {
      return latitude;
    };

    var getLongitude = function() {
      return longitude;
    };

    var getElevation = function() {
      return elevation;
    };

    that.getLatitude = getLatitude;
    that.getLongitude = getLongitude;
    that.getElevation = getElevation;

    return that;
  };

  return {
    create: create,
  };
}();