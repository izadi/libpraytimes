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

var libpraytimes = libpraytimes || {};

libpraytimes.Coords = function() {
  var create = function(latitude, longitude, elevation) {
    var that = {};

    latitude = latitude || 0;
    longitude = longitude || 0;
    elevation = elevation || 0;

    var getLatitude = function() {
      return latitude;
    };

    var setLatitude = function(newLatitude) {
      latitude = newLatitude;
    };

    var getLongitude = function() {
      return longitude;
    };

    var setLongitude = function(newLongitude) {
      longitude = newLongitude;
    };

    var getElevation = function() {
      return elevation;
    };

    var setElevation = function(newElevation) {
      elevation = newElevation;
    };

    that.getLatitude = getLatitude;
    that.setLatitude = setLatitude;
    that.getLongitude = getLongitude;
    that.setLongitude = setLongitude;
    that.getElevation = getElevation;
    that.setElevation = setElevation;

    return that;
  };

  return {
    create: create,
  };
}();
