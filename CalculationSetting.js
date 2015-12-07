/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     CalculationSetting.js
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

libpraytimes.CalculationSetting = function() {
  var create = function(method) {
    var that = {};

    method = method || libpraytimes.MethodSetting.CUSTOM;

    var adjustment = libpraytimes.AdjustmentSetting.create();
    var highLats = libpraytimes.HigherLatitudesSetting.DEFAULT;
    var numIterations = 1;
    var tuning = libpraytimes.TuningSetting.create();

    var getMethod = function() {
      return method;
    };

    var setMethod = function(newMethod) {
      method = newMethod;
    };

    var getAdjustment = function() {
      return adjustment;
    };

    var getImsak = function() {
      return adjustment.getImsak();
    };

    var getFajr = function() {
      return method == libpraytimes.MethodSetting.CUSTOM ? adjustment.getFajr() : method.getFajr();
    };

    var getDhuhr = function() {
      return adjustment.getDhuhr();
    };

    var getAsr = function() {
      return adjustment.getAsr();
    };

    var getMaghrib = function() {
      return method == libpraytimes.MethodSetting.CUSTOM ? adjustment.getMaghrib() : method.getMaghrib();
    };

    var getIsha = function() {
      return method == libpraytimes.MethodSetting.CUSTOM ? adjustment.getIsha() : method.getIsha();
    };

    var getMidnight = function() {
      return method == libpraytimes.MethodSetting.CUSTOM ? adjustment.getMidnight() : method.getMidnight();
    };

    var getHighLats = function() {
      return highLats;
    };

    var setHighLats = function(newHighLats) {
      highLats = newHighLats;
    };

    var getNumIterations = function() {
      return numIterations;
    };

    var setNumIterations = function(newNumIterations) {
      numIterations = newNumIterations;
    };

    var getTuning = function() {
      return tuning;
    };

    that.getMethod = getMethod;
    that.setMethod = setMethod;
    that.getAdjustment = getAdjustment;
    that.getImsak = getImsak;
    that.getFajr = getFajr;
    that.getDhuhr = getDhuhr;
    that.getAsr = getAsr;
    that.getMaghrib = getMaghrib;
    that.getIsha = getIsha;
    that.getMidnight = getMidnight;
    that.getHighLats = getHighLats;
    that.setHighLats = setHighLats;
    that.getNumIterations = getNumIterations;
    that.setNumIterations = setNumIterations;
    that.getTuning = getTuning;

    return that;
  };

  return {
    create: create,
  };
}();
