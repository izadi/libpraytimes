/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     HigherLatitudesSetting.js
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

praytimes.HigherLatitudesSetting = function() {
  var NIGHT_MIDDLE_METHOD = 'NIGHT_MIDDLE_METHOD ';
  var ANGLE_BASED_METHOD = 'ANGLE_BASED_METHOD ';
  var ONE_SEVENTH_METHOD = 'ONE_SEVENTH_METHOD ';
  var NONE = 'NONE ';

  return {
    NIGHT_MIDDLE_METHOD: NIGHT_MIDDLE_METHOD,
    ANGLE_BASED_METHOD: ANGLE_BASED_METHOD,
    ONE_SEVENTH_METHOD: ONE_SEVENTH_METHOD,
    NONE: NONE,
  };
}();
