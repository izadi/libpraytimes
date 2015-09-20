/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     MethodSetting.js
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

praytimes.MethodSetting = function() {
  var create = function(fajr, maghrib, isha, midnight) {
    var that = {};

    var getFajr = function() {
      return fajr;
    };

    var getMaghrib = function() {
      return maghrib;
    };

    var getIsha = function() {
      return isha;
    };

    var getMidnight = function() {
      return midnight;
    };

    that.getFajr = getFajr;
    that.getMaghrib = getMaghrib;
    that.getIsha = getIsha;
    that.getMidnight = getMidnight;

    return that;
  };

  var MWL = create(praytimes.FajrSetting.create(18),
                   praytimes.MaghribSetting.DEFAULT,
                   praytimes.IshaSetting.createTwilightAngleBased(17),
                   praytimes.MidnightSetting.STANDARD_METHOD);
  var ISNA = create(praytimes.FajrSetting.create(15),
                    praytimes.MaghribSetting.DEFAULT,
                    praytimes.IshaSetting.createTwilightAngleBased(15),
                    praytimes.MidnightSetting.STANDARD_METHOD);
  var EGYPT = create(praytimes.FajrSetting.create(19.5),
                     praytimes.MaghribSetting.DEFAULT,
                     praytimes.IshaSetting.createTwilightAngleBased(17.5),
                     praytimes.MidnightSetting.STANDARD_METHOD);
  var MAKKAH = create(praytimes.FajrSetting.create(18.5),
                      praytimes.MaghribSetting.DEFAULT,
                      praytimes.IshaSetting.createMaghribBased(90),
                      praytimes.MidnightSetting.STANDARD_METHOD);
  var KARACHI = create(praytimes.FajrSetting.create(18),
                       praytimes.MaghribSetting.DEFAULT,
                       praytimes.IshaSetting.createTwilightAngleBased(18),
                       praytimes.MidnightSetting.STANDARD_METHOD);
  var TEHRAN = create(praytimes.FajrSetting.create(17.7),
                      praytimes.MaghribSetting.createTwilightAngleBased(4.5),
                      praytimes.IshaSetting.createTwilightAngleBased(14),
                      praytimes.MidnightSetting.JAFARI_METHOD);
  var JAFARI = create(praytimes.FajrSetting.create(16),
                      praytimes.MaghribSetting.createTwilightAngleBased(4),
                      praytimes.IshaSetting.createTwilightAngleBased(14.4),
                      praytimes.MidnightSetting.JAFARI_METHOD);
  var CUSTOM = create();

  return {
    MWL: MWL,
    ISNA: ISNA,
    EGYPT: EGYPT,
    MAKKAH: MAKKAH,
    KARACHI: KARACHI,
    TEHRAN: TEHRAN,
    JAFARI: JAFARI,
    CUSTOM: CUSTOM,
  };
}();
