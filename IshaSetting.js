/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     IshaSetting.js
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

libpraytimes.IshaSetting = function() {
  var Type = {
    TWILIGHT_ANGLE_BASED: 'TWILIGHT_ANGLE_BASED',
    MAGHRIB_BASED: 'MAGHRIB_BASED',
  };

  var create = function(type) {
    var that = {};

    var getType = function() {
      return type;
    };

    that.getType = getType;

    return that;
  };

  var createTwilightAngleBased = function(twilightAngle) {
    var that = create(Type.TWILIGHT_ANGLE_BASED);

    var getTwilightAngle = function() {
      return twilightAngle;
    };

    that.getTwilightAngle = getTwilightAngle;

    return that;
  };

  var createMaghribBased = function(minutesAfterMaghrib) {
    var that = create(Type.MAGHRIB_BASED);

    var getMinutesAfterMaghrib = function() {
      return minutesAfterMaghrib;
    };

    that.getMinutesAfterMaghrib = getMinutesAfterMaghrib;

    return that;
  };

  var DEFAULT = createTwilightAngleBased(0);

  return {
    Type: Type,
    createTwilightAngleBased: createTwilightAngleBased,
    createMaghribBased: createMaghribBased,
    DEFAULT: DEFAULT,
  };
}();
