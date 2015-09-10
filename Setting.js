/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     Setting.js
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

praytimes.Setting = function() {
  var create = function(method) {
    var that = {};

    var imsak = praytimes.ImsakSetting.DEFAULT;
    var fajr = praytimes.FajrSetting.DEFAULT;
    var dhuhr = praytimes.DhuhrSetting.DEFAULT;
    var asr = praytimes.AsrSetting.DEFAULT;
    var maghrib = praytimes.MaghribSetting.DEFAULT;
    var isha = praytimes.IshaSetting.DEFAULT;
    var midnight = praytimes.MidnightSetting.DEFAULT;
    var highLats = praytimes.HigherLatitudesSetting.DEFAULT;

    var updateMethod = function() {
      if (method != praytimes.CalcMethod.CUSTOM) {
        fajr = method.getFajr();
        maghrib = method.getMaghrib();
        isha = method.getIsha();
        midnight = method.getMidnight();
      }
    };

    var getMethod = function() {
      return method;
    };

    var setMethod = function(newMethod) {
      method = newMethod;
      updateMethod();
    };

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
      if (method != praytimes.CalcMethod.CUSTOM)
        return;
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
      if (method != praytimes.CalcMethod.CUSTOM)
        return;
      maghrib = newMaghrib;
    };

    var getIsha = function() {
      return isha;
    };

    var setIsha = function(newIsha) {
      if (method != praytimes.CalcMethod.CUSTOM)
        return;
      isha = newIsha;
    };

    var getMidnight = function() {
      return midnight;
    };

    var setMidnight = function(newMidnight) {
      if (method != praytimes.CalcMethod.CUSTOM)
        return;
      midnight = newMidnight;
    };

    var getHighLats = function() {
      return highLats;
    };

    var setHighLats = function(newHighLats) {
      highLats = newHighLats;
    };

    updateMethod();

    that.getMethod = getMethod;
    that.setMethod = setMethod;
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
    that.getHighLats = getHighLats;
    that.setHighLats = setHighLats;

    return that;
  };

  return {
    create: create,
  };
}();
