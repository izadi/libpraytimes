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

var praytimes = praytimes || {};

praytimes.PrayTimes = function() {
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
      return praytimes.DegMath.fixHour(time2 - time1);
    };

    var julian = function(date) {
      var month = date.getMonth();
      var year = date.getYear();
      if (month <= 2) {
        year--;
        month += 12;
      }
      var a = Math.floor(year / 100);
      var b = 2 - a + Math.floor(a / 4);
      return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) +
        date.getDay() + b - 1524.5;
    };

    var dayPortions = function(times) {
      times.inmap(function(timePoint, value) {
        return value / 24;
      });
    };

    var sunPosition = function(jDate) {
      var d = jDate - 2451545.0;
      var g = praytimes.DegMath.fixAngle(357.529 + 0.98560028 * d);
      var q = praytimes.DegMath.fixAngle(280.459 + 0.98564736 * d);
      var l = praytimes.DegMath.fixAngle(
          q + 1.915 * praytimes.DegMath.sin(g) + 0.020 * praytimes.DegMath.sin(2 * g));

      //double r = 1.00014 - 0.01671 * praytimes.DegMath.cos(g) - 0.00014 * praytimes.DegMath.cos(2 * g);
      var e = 23.439 - 0.00000036 * d;

      var ra = praytimes.DegMath.arctan2(praytimes.DegMath.cos(e) * praytimes.DegMath.sin(l),
                                         praytimes.DegMath.cos(l)) / 15;
      var eqt = q / 15 - praytimes.DegMath.fixHour(ra);
      var decl = praytimes.DegMath.arcsin(
          praytimes.DegMath.sin(e) * praytimes.DegMath.sin(l));

      return SunPosition.create(decl, eqt);
    };

    var midDay = function(jDate, time) {
      var eqt = sunPosition(jDate + time).getEquation();
      return praytimes.DegMath.fixHour(12 - eqt);
    };

    var sunAngleTime = function(coords, jDate, angle, time, ccw) {
      var decl = sunPosition(jDate + time).getDeclination();
      var noon = midDay(jDate, time);
      var t = 1 / 15 * praytimes.DegMath.arccos(
          (-praytimes.DegMath.sin(angle) - praytimes.DegMath.sin(decl) * praytimes.DegMath.sin(coords.getLatitude())) /
          (praytimes.DegMath.cos(decl) * praytimes.DegMath.cos(coords.getLatitude())));
      return noon + (ccw ? -t : t);
    };

    var riseSetAngle = function(coords) {
      var angle = 0.0347 * Math.sqrt(coords.getElevation()); // an approximation
      return 0.833 + angle;
    };

    var asrTime = function(coords, jDate, factor, time) {
      var decl = sunPosition(jDate + time).getDeclination();
      var angle = -praytimes.DegMath.arccot(factor + praytimes.DegMath.tan(Math.abs(coords.getLatitude() - decl)));
      return sunAngleTime(coords, jDate, angle, time, false);
    };

    var computePrayerTimes = function(coords, jDate, times) {
      dayPortions(times);
      times.inmap(function(timePoint, value) {
        switch (timePoint) {
        case praytimes.TimePoint.IMSAK:
          if (calculation.getImsak().getType() == praytimes.ImsakSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getImsak().getTwilightAngle(), value, true);
          return value;
        case praytimes.TimePoint.FAJR:
          return sunAngleTime(coords, jDate, calculation.getFajr().getTwilightAngle(), value, true);
        case praytimes.TimePoint.SUNRISE:
          return sunAngleTime(coords, jDate, riseSetAngle(coords), value, true);
        case praytimes.TimePoint.DHUHR:
          return midDay(jDate, value);
        case praytimes.TimePoint.ASR:
          return asrTime(coords, jDate, calculation.getAsr().getShadowFactor(), value);
        case praytimes.TimePoint.SUNSET:
          return sunAngleTime(coords, jDate, riseSetAngle(coords), value, false);
        case praytimes.TimePoint.MAGHRIB:
          if (calculation.getMaghrib().getType() == praytimes.MaghribSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getMaghrib().getTwilightAngle(), value, false);
          return value;
        case praytimes.TimePoint.ISHA:
          if (calculation.getIsha().getType() == praytimes.IshaSetting.Type.TWILIGHT_ANGLE_BASED)
            return sunAngleTime(coords, jDate, calculation.getIsha().getTwilightAngle(), value, false);
          return value;
        }
      });
    };

    var nightPortion = function(angle, night) {
      switch (calculation.getHighLats()) {
      case praytimes.HigherLatitudesSetting.ANGLE_BASED_METHOD:
        return night * angle / 60;
      case praytimes.HigherLatitudesSetting.ONE_SEVENTH_METHOD:
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
      var nightTime = timeDiff(times.get(praytimes.TimePoint.SUNSET),
                               times.get(praytimes.TimePoint.SUNRISE));
      if (calculation.getImsak().getType() == praytimes.ImsakSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(praytimes.TimePoint.IMSAK,
                  adjustHlTime(times.get(praytimes.TimePoint.IMSAK),
                               times.get(praytimes.TimePoint.SUNRISE),
                               calculation.getImsak().getTwilightAngle(),
                               nightTime,
                               true));
      }
      times.set(praytimes.TimePoint.FAJR,
                adjustHlTime(times.get(praytimes.TimePoint.FAJR),
                             times.get(praytimes.TimePoint.SUNRISE),
                             calculation.getFajr().getTwilightAngle(),
                             nightTime,
                             true));
      if (calculation.getIsha().getType() == praytimes.IshaSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(praytimes.TimePoint.ISHA,
                  adjustHlTime(times.get(praytimes.TimePoint.ISHA),
                               times.get(praytimes.TimePoint.SUNSET),
                               calculation.getIsha().getTwilightAngle(),
                               nightTime,
                               false));
      }
      if (calculation.getMaghrib().getType() == praytimes.MaghribSetting.Type.TWILIGHT_ANGLE_BASED) {
        times.set(praytimes.TimePoint.MAGHRIB,
                  adjustHlTime(times.get(praytimes.TimePoint.MAGHRIB),
                               times.get(praytimes.TimePoint.SUNSET),
                               calculation.getMaghrib().getTwilightAngle(),
                               nightTime,
                               false));
      }
    };

    var adjustTimes = function(times, coords) {
      times.inmap(function(timePoint, value) {
        return value - coords.getLongitude() / 15;
      });
      if (calculation.getHighLats() != praytimes.HigherLatitudesSetting.NONE)
        adjustHighLats(times);
      if (calculation.getImsak().getType() == praytimes.ImsakSetting.Type.FAJR_BASED) {
        times.set(praytimes.TimePoint.IMSAK,
                  times.get(praytimes.TimePoint.FAJR) - calculation.getImsak().getMinutesBeforeFajr() / 60);
      }
      if (calculation.getMaghrib().getType() == praytimes.MaghribSetting.Type.SUNSET_BASED) {
        times.set(praytimes.TimePoint.MAGHRIB,
                  times.get(praytimes.TimePoint.SUNSET) + calculation.getMaghrib().getMinutesAfterSunset() / 60);
      }
      if (calculation.getIsha().getType() == praytimes.IshaSetting.Type.MAGHRIB_BASED) {
        times.set(praytimes.TimePoint.ISHA,
                  times.get(praytimes.TimePoint.MAGHRIB) + calculation.getIsha().getMinutesAfterMaghrib() / 60);
      }
      times.set(praytimes.TimePoint.DHUHR,
                times.get(praytimes.TimePoint.DHUHR) + calculation.getDhuhr().getMinutesAfterMidDay() / 60);
    };

    var tuneTimes = function(times) {
      times.inmap(function(timePoint, value) {
        return value + calculation.getTuning().getOffset(timePoint) / 60;
      });
    };

    var computeTimes = function(coords, jDate) {
      var times = praytimes.TimePointMap.create();
      times.set(praytimes.TimePoint.IMSAK, 5);
      times.set(praytimes.TimePoint.FAJR, 5);
      times.set(praytimes.TimePoint.SUNRISE, 6);
      times.set(praytimes.TimePoint.DHUHR, 12);
      times.set(praytimes.TimePoint.ASR, 13);
      times.set(praytimes.TimePoint.SUNSET, 18);
      times.set(praytimes.TimePoint.MAGHRIB, 18);
      times.set(praytimes.TimePoint.ISHA, 18);
      for (var i = 0; i < calculation.getNumIterations(); i++)
        computePrayerTimes(coords, jDate, times);
      adjustTimes(times, coords);
      times.set(praytimes.TimePoint.MIDNIGHT,
                calculation.getMidnight() == praytimes.MidnightSetting.JAFARI_METHOD
                    ? times.get(praytimes.TimePoint.MAGHRIB) +
                      timeDiff(times.get(praytimes.TimePoint.MAGHRIB), times.get(praytimes.TimePoint.FAJR)) / 2
                    : times.get(praytimes.TimePoint.SUNSET) +
                      timeDiff(times.get(praytimes.TimePoint.SUNSET), times.get(praytimes.TimePoint.SUNRISE)) / 2);
      tuneTimes(times);
      return times;
    };

    var getTimes = function(date, coords) {
      var times = computeTimes(coords, julian(date) - coords.getLongitude() / (15 * 24));

      var result = times.outmap(function(timePoint, value) {
        return new Date(Date.UTC(date.getYear(), date.getMonth() - 1, date.getDay(),
                                 0, 0, 0, value * 60 * 60 * 1000));
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
