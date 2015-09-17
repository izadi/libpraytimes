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

var praytimes = praytimes || {};

praytimes.CalculationSetting = function(method) {
  var create = function() {
    var that = {};

    var adjustment = praytimes.AdjustmentSetting.create();
    var highLats = praytimes.HigherLatitudeSetting.DEFAULT;
    var numIterations = 1;
    var tuning = praytimes.TuningSetting.create();

    var getMethod = function() {
      return method;
    };

    var setMethod = function(newMethod) {
      method = newMethod;
    };

    var getAdjustment = function() {
      return adjustment;
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
    that.getHighLats = getHighLat;
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
