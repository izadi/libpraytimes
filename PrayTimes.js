/* ----< Copyright Block >----
 *
 * Prayer Times Calculator
 *     PrayTimes.js
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

libpraytimes.PrayTimes = function() {
  var SunPosition = function() {
    var create = function(declination, equaiton) {
      var that = {};

      var getDeclination = function() {
        return declination;
      };

      var getEquation = function() {
        return equaiton;
      };

      that.getDeclination = getDeclination;
      that.getEquation = getEquation;

      return that;
    };

    return {
      create: create,
    };
  }();

  var create = function(calculation) {
    var that = {};

    var timeDiff = function(time1, time2) {
      return libpraytimes.DegMath.fixHour(time2 - time1);
    };

    var julian = function(date) {
      var day = date.getUTCDate();
      var month = date.getUTCMonth() + 1;
      var year = date.getUTCFullYear();
      if (month <= 2) {
        year--;
        month += 12;
      }
      var a = Math.floor(year / 100);
      var b = 2 - a + Math.floor(a / 4);
      return Math.floor(365.25 * (year + 4716)) +
             Math.floor(30.6001 * (month + 1)) +
             day + b - 1524.5;
    };

    var dayPortions = function(times) {
      times.inmap(function(timePoint, value) {
        return value / 24;
      });
    };

    var sunPosition = function(jDate) {
      var d = jDate - 2451545.0;
      var g = libpraytimes.DegMath.fixAngle(357.529 + 0.98560028 * d);
      var q = libpraytimes.DegMath.fixAngle(280.459 + 0.98564736 * d);
      var l = libpraytimes.DegMath.fixAngle(
          q + 1.915 * libpraytimes.DegMath.sin(g) + 0.020 * libpraytimes.DegMath.sin(2 * g));

      //double r = 1.00014 - 0.01671 * libpraytimes.DegMath.cos(g) -
      //           0.00014 * libpraytimes.DegMath.cos(2 * g);
      var e = 23.439 - 0.00000036 * d;

      var ra = libpraytimes.DegMath.arctan2(libpraytimes.DegMath.cos(e) * libpraytimes.DegMath.sin(l),
                                            libpraytimes.DegMath.cos(l)) / 15;
      var eqt = q / 15 - libpraytimes.DegMath.fixHour(ra);
      var decl = libpraytimes.DegMath.arcsin(libpraytimes.DegMath.sin(e) * libpraytimes.DegMath.sin(l));

      return SunPosition.create(decl, eqt);
    };

    var midDay = function(jDate, time) {
      var eqt = sunPosition(jDate + time).getEquation();
      return libpraytimes.DegMath.fixHour(12 - eqt);
    };

    var sunAngleTime = function(coords, jDate, angle, time, ccw) {
      var decl = sunPosition(jDate + time).getDeclination();
      var noon = midDay(jDate, time);
      var t = 1 / 15 * libpraytimes.DegMath.arccos(
          (-libpraytimes.DegMath.sin(angle) - libpraytimes.DegMath.sin(decl) * libpraytimes.DegMath.sin(coords.getLatitude())) /
          (libpraytimes.DegMath.cos(decl) * libpraytimes.DegMath.cos(coords.getLatitude())));
      return noon + (ccw ? -t : t);
    };

    var riseSetAngle = function(coords) {
      var angle = 0.0347 * Math.sqrt(coords.getElevation()); // an approximation
      return 0.833 + angle;
    };

    var asrTime = function(coords, jDate, factor, time) {
      var decl = sunPosition(jDate + time).getDeclination();
      var angle = -libpraytimes.DegMath.arccot(factor + libpraytimes.DegMath.tan(Math.abs(coords.getLatitude() - decl)));
      return sunAngleTime(coords, jDate, angle, time, false);
    };

    var computePrayerTimes = function(coords, jDate, times) {
      dayPortions(times);
      times.inmap(function(timePoint, value) {
        switch (timePoint) {
        case libpraytimes.TimePoint.IMSAK:
          if (calculation.getImsak().getType() == libpraytimes.ImsakSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getImsak().getTwilightAngle(), value, true);
          return value;
        case libpraytimes.TimePoint.FAJR:
          return sunAngleTime(coords, jDate, calculation.getFajr().getTwilightAngle(), value, true);
        case libpraytimes.TimePoint.SUNRISE:
          return sunAngleTime(coords, jDate, riseSetAngle(coords), value, true);
        case libpraytimes.TimePoint.DHUHR:
          return midDay(jDate, value);
        case libpraytimes.TimePoint.ASR:
          return asrTime(coords, jDate, calculation.getAsr().getShadowFactor(), value);
        case libpraytimes.TimePoint.SUNSET:
          return sunAngleTime(coords, jDate, riseSetAngle(coords), value, false);
        case libpraytimes.TimePoint.MAGHRIB:
          if (calculation.getMaghrib().getType() == libpraytimes.MaghribSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getMaghrib().getTwilightAngle(), value, false);
          return value;
        case libpraytimes.TimePoint.ISHA:
          if (calculation.getIsha().getType() == libpraytimes.IshaSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getIsha().getTwilightAngle(), value, false);
          return value;
        }
      });
    };

    var nightPortion = function(angle, night) {
      switch (calculation.getHighLats()) {
      case libpraytimes.HigherLatitudesSetting.ANGLE_BASED_METHOD:
        return night * angle / 60;
      case libpraytimes.HigherLatitudesSetting.ONE_SEVENTH_METHOD:
        return night / 7;
      default:
        return night / 2;
      }
    }

    var adjustHlTime = function(time, base, angle, night, ccw) {
      var portion = nightPortion(angle, night);
      var tdiff = ccw ? timeDiff(time, base) : timeDiff(base, time);
      if (isNaN(time) || tdiff > portion)
        time = base + (ccw ? -portion : portion);
      return time;
    };

    var adjustHighLats = function(times) {
      var nightTime = timeDiff(times.get(libpraytimes.TimePoint.SUNSET),
                               times.get(libpraytimes.TimePoint.SUNRISE));
      if (calculation.getImsak().getType() == libpraytimes.ImsakSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(libpraytimes.TimePoint.IMSAK,
                  adjustHlTime(times.get(libpraytimes.TimePoint.IMSAK),
                               times.get(libpraytimes.TimePoint.SUNRISE),
                               calculation.getImsak().getTwilightAngle(),
                               nightTime,
                               true));
      }
      times.set(libpraytimes.TimePoint.FAJR,
                adjustHlTime(times.get(libpraytimes.TimePoint.FAJR),
                             times.get(libpraytimes.TimePoint.SUNRISE),
                             calculation.getFajr().getTwilightAngle(),
                             nightTime,
                             true));
      if (calculation.getIsha().getType() == libpraytimes.IshaSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(libpraytimes.TimePoint.ISHA,
                  adjustHlTime(times.get(libpraytimes.TimePoint.ISHA),
                               times.get(libpraytimes.TimePoint.SUNSET),
                               calculation.getIsha().getTwilightAngle(),
                               nightTime,
                               false));
      }
      if (calculation.getMaghrib().getType() == libpraytimes.MaghribSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(libpraytimes.TimePoint.MAGHRIB,
                  adjustHlTime(times.get(libpraytimes.TimePoint.MAGHRIB),
                               times.get(libpraytimes.TimePoint.SUNSET),
                               calculation.getMaghrib().getTwilightAngle(),
                               nightTime,
                               false));
      }
    };

    var adjustTimes = function(times, coords) {
      times.inmap(function(timePoint, value) {
        return value - coords.getLongitude() / 15;
      });
      if (calculation.getHighLats() != libpraytimes.HigherLatitudesSetting.NONE)
        adjustHighLats(times);
      if (calculation.getImsak().getType() == libpraytimes.ImsakSetting.Type.FAJR_BASED) {
        times.set(libpraytimes.TimePoint.IMSAK,
                  times.get(libpraytimes.TimePoint.FAJR) - calculation.getImsak().getMinutesBeforeFajr() / 60);
      }
      if (calculation.getMaghrib().getType() == libpraytimes.MaghribSetting.Type.SUNSET_BASED) {
        times.set(libpraytimes.TimePoint.MAGHRIB,
                  times.get(libpraytimes.TimePoint.SUNSET) + calculation.getMaghrib().getMinutesAfterSunset() / 60);
      }
      if (calculation.getIsha().getType() == libpraytimes.IshaSetting.Type.MAGHRIB_BASED) {
        times.set(libpraytimes.TimePoint.ISHA,
                  times.get(libpraytimes.TimePoint.MAGHRIB) + calculation.getIsha().getMinutesAfterMaghrib() / 60);
      }
      times.set(libpraytimes.TimePoint.DHUHR,
                times.get(libpraytimes.TimePoint.DHUHR) + calculation.getDhuhr().getMinutesAfterMidDay() / 60);
    };

    var tuneTimes = function(times) {
      times.inmap(function(timePoint, value) {
        return value + calculation.getTuning().getOffset(timePoint) / 60;
      });
    };

    var computeTimes = function(coords, jDate) {
      var times = libpraytimes.TimePointMap.create();
      times.set(libpraytimes.TimePoint.IMSAK, 5);
      times.set(libpraytimes.TimePoint.FAJR, 5);
      times.set(libpraytimes.TimePoint.SUNRISE, 6);
      times.set(libpraytimes.TimePoint.DHUHR, 12);
      times.set(libpraytimes.TimePoint.ASR, 13);
      times.set(libpraytimes.TimePoint.SUNSET, 18);
      times.set(libpraytimes.TimePoint.MAGHRIB, 18);
      times.set(libpraytimes.TimePoint.ISHA, 18);
      for (var i = 0; i < calculation.getNumIterations(); i++)
        computePrayerTimes(coords, jDate, times);
      adjustTimes(times, coords);
      times.set(libpraytimes.TimePoint.MIDNIGHT,
                calculation.getMidnight() == libpraytimes.MidnightSetting.JAFARI_METHOD
                    ? times.get(libpraytimes.TimePoint.MAGHRIB) +
                      timeDiff(times.get(libpraytimes.TimePoint.MAGHRIB), times.get(libpraytimes.TimePoint.FAJR)) / 2
                    : times.get(libpraytimes.TimePoint.SUNSET) +
                      timeDiff(times.get(libpraytimes.TimePoint.SUNSET), times.get(libpraytimes.TimePoint.SUNRISE)) / 2);
      tuneTimes(times);
      return times;
    };

    var getTimes = function(date, coords) {
      var times = computeTimes(coords, julian(date) - coords.getLongitude() / (15 * 24));

      var result = times.outmap(function(timePoint, value) {
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                                 date.getUTCDate(), 0, 0, 0, value * 60 * 60 * 1000));
      });
      return result;
    };

    that.getTimes = getTimes;

    return that;
  };

  return {
    create: create,
  };
}();
