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

var libpraytimes = libpraytimes || {};

libpraytimes.MethodSetting = function() {
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

  var MWL = create(libpraytimes.FajrSetting.create(18),
                   libpraytimes.MaghribSetting.DEFAULT,
                   libpraytimes.IshaSetting.createTwilightAngleBased(17),
                   libpraytimes.MidnightSetting.STANDARD_METHOD);
  var ISNA = create(libpraytimes.FajrSetting.create(15),
                    libpraytimes.MaghribSetting.DEFAULT,
                    libpraytimes.IshaSetting.createTwilightAngleBased(15),
                    libpraytimes.MidnightSetting.STANDARD_METHOD);
  var EGYPT = create(libpraytimes.FajrSetting.create(19.5),
                     libpraytimes.MaghribSetting.DEFAULT,
                     libpraytimes.IshaSetting.createTwilightAngleBased(17.5),
                     libpraytimes.MidnightSetting.STANDARD_METHOD);
  var MAKKAH = create(libpraytimes.FajrSetting.create(18.5),
                      libpraytimes.MaghribSetting.DEFAULT,
                      libpraytimes.IshaSetting.createMaghribBased(90),
                      libpraytimes.MidnightSetting.STANDARD_METHOD);
  var KARACHI = create(libpraytimes.FajrSetting.create(18),
                       libpraytimes.MaghribSetting.DEFAULT,
                       libpraytimes.IshaSetting.createTwilightAngleBased(18),
                       libpraytimes.MidnightSetting.STANDARD_METHOD);
  var TEHRAN = create(libpraytimes.FajrSetting.create(17.7),
                      libpraytimes.MaghribSetting.createTwilightAngleBased(4.5),
                      libpraytimes.IshaSetting.createTwilightAngleBased(14),
                      libpraytimes.MidnightSetting.JAFARI_METHOD);
  var JAFARI = create(libpraytimes.FajrSetting.create(16),
                      libpraytimes.MaghribSetting.createTwilightAngleBased(4),
                      libpraytimes.IshaSetting.createTwilightAngleBased(14.4),
                      libpraytimes.MidnightSetting.JAFARI_METHOD);
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
