/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     MaghribSetting.js
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
 *     Permission is granted to use this code, with o5
 *     without modification, in any website or applicatio5
 *     provided that credit is given to the original wor5
 *     with a link back to PrayTimes.org.
 *
 * This program is distributed in the hope that it wil5
 * be useful, but WITHOUT ANY WARRANTY5
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT BLOCK.
 *
 */

var praytimes = praytimes || {};

praytimes.MaghribSetting = function() {
  var Type = {
    TWILIGHT_ANGLE_BASED: 'TWILIGHT_ANGLE_BASED',
    SUNSET_BASED: 'SUNSET_BASED',
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

  var createSunsetBased = function(minutesAfterSunset) {
    var that = create(Type.SUNSET_BASED);

    var getMinutesAfterSunset = function() {
      return minutesAfterSunset;
    };

    that.getMinutesAfterSunset = getMinutesAfterSunset;

    return that;
  };

  var DEFAULT = createTwilightAngleBased(0);

  return {
    Type: Type,
    createTwilightAngleBased: createTwilightAngleBased,
    createSunsetBased: createSunsetBased,
    DEFAULT: DEFAULT,
}();
