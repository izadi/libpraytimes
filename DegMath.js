/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     DegMath.js
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

praytimes.DegMath = function() {
  var dtr = function(d) {
    return (d * Math.PI) / 180;
  };

	var rtd = function(r) {
		return (r * 180) / Math.PI;
	};

	var sin = function(d) {
		return Math.sin(dtr(d));
	};

	var cos = function(d) {
		return Math.cos(dtr(d));
	};

	var tan = function(d) {
		return Math.tan(dtr(d));
	};

	var arcsin = function(d) {
		return rtd(Math.asin(d));
	};

	var arccos = function(d) {
		return rtd(Math.acos(d));
	};

	var arctan = function(d) {
		return rtd(Math.atan(d));
	};

	var arccot = function(x) {
		return rtd(Math.atan(1 / x));
	};

	var arctan2 = function(y, x) {
		return rtd(Math.atan2(y, x));
	};

	var fix = function(a, b) {
		a = a - b * (Math.floor(a / b));
		return (a < 0) ? a + b : a;
	};

	var fixAngle = function(a) {
		return fix(a, 360);
	};

	var fixHour = function(a) {
		return fix(a, 24 );
	};

  return {
    dtr: dtr,
	  rtd: rtd,
	  sin: sin,
	  cos: cos,
	  tan: tan,
	  arcsin: arcsin,
	  arccos: arccos,
	  arctan: arctan,
	  arccot: arccot,
	  arctan2: arctan2,
	  fix: fix,
	  fixAngle: fixAngle,
	  fixHour: fixHour,
  };
}();
