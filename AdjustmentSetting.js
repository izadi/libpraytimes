/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     AdjustmentSetting.js
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

praytimes.AdjustmentSetting = function() {
  var create = function() {
    var that = {};

    var imsak = praytimes.ImsakSetting.DEFAULT;
    var fajr = praytimes.FajrSetting.DEFAULT;
    var dhuhr = praytimes.DhuhrSetting.DEFAULT;
    var asr = praytimes.AsrSetting.DEFAULT;
    var maghrib = praytimes.MaghribSetting.DEFAULT;
    var isha = praytimes.IshaSetting.DEFAULT;
    var midnight = praytimes.MidnightSetting.DEFAULT;

    var getImsak = function() {
      return imsak;
    };

    var setImsak = function(newImsak) {
      imsak = newImsak;
    };

    var getFajr = function() {
      return fajr;
    };

    var setFajr = function(newFajr) {
      fajr = newFajr;
    };

    var getDhuhr = function() {
      return dhuhr;
    };

    var setDhuhr = function(newDhuhr) {
      dhuhr = newDhuhr;
    };

    var getAsr = function() {
      return asr;
    };

    var setAsr = function(newAsr) {
      asr = newAsr;
    };

    var getMaghrib = function() {
      return maghrib;
    };

    var setMaghrib = function(newMaghrib) {
      maghrib = newMaghrib;
    };

    var getIsha = function() {
      return isha;
    };

    var setIsha = function(newIsha) {
      isha = newIsha;
    };

    var getMidnight = function() {
      return midnight;
    };

    var setMidnight = function(newMidnight) {
      midnight = newMidnight;
    };

    that.getImsak = getImsak;
    that.setImsak = setImsak;
    that.getFajr = getFajr;
    that.setFajr = setFajr;
    that.getDhuhr = getDhuhr;
    that.setDhuhr = setDhuhr;
    that.getAsr = getAsr;
    that.setAsr = setAsr;
    that.getMaghrib = getMaghrib;
    that.setMaghrib = setMaghrib;
    that.getIsha = getIsha;
    that.setIsha = setIsha;
    that.getMidnight = getMidnight;
    that.setMidnight = setMidnight;

    return that;
  };

  return {
    create: create,
  };
}();
