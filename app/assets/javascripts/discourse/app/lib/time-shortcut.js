import {
  MOMENT_MONDAY,
  laterThisWeek,
  laterToday,
  nextBusinessWeekStart,
  nextMonth,
  nextWeek,
  now,
  startOfDay,
  tomorrow,
} from "discourse/lib/time-utils";
import I18n from "I18n";

export const TIME_SHORTCUT_TYPES = {
  LATER_TODAY: "later_today",
  TOMORROW: "tomorrow",
  NEXT_WEEK: "next_week",
  TWO_WEEKS: "two_weeks",
  NEXT_MONTH: "next_month",
  TWO_MONTHS: "two_months",
  THREE_MONTHS: "three_months",
  FOUR_MONTHS: "four_months",
  SIX_MONTHS: "six_months",
  ONE_YEAR: "one_year",
  FOREVER: "forever",
  CUSTOM: "custom",
  RELATIVE: "relative",
  LAST_CUSTOM: "last_custom",
  NONE: "none",
  START_OF_NEXT_BUSINESS_WEEK: "start_of_next_business_week",
  LATER_THIS_WEEK: "later_this_week",
  POST_LOCAL_DATE: "post_local_date",
};

export function defaultShortcutOptions(timezone) {
  return [
    {
      icon: "angle-right",
      id: TIME_SHORTCUT_TYPES.LATER_TODAY,
      label: "time_shortcut.later_today",
      time: laterToday(timezone),
      timeFormatted: laterToday(timezone).format(I18n.t("dates.time")),
      hidden: true,
    },
    {
      icon: "far-sun",
      id: TIME_SHORTCUT_TYPES.TOMORROW,
      label: "time_shortcut.tomorrow",
      time: tomorrow(timezone),
      timeFormatted: tomorrow(timezone).format(I18n.t("dates.time_short_day")),
    },
    {
      icon: "angle-double-right",
      id: TIME_SHORTCUT_TYPES.LATER_THIS_WEEK,
      label: "time_shortcut.later_this_week",
      time: laterThisWeek(timezone),
      timeFormatted: laterThisWeek(timezone).format(
        I18n.t("dates.time_short_day")
      ),
      hidden: true,
    },
    {
      icon: "briefcase",
      id: TIME_SHORTCUT_TYPES.START_OF_NEXT_BUSINESS_WEEK,
      label:
        now(timezone).day() === MOMENT_MONDAY
          ? "time_shortcut.start_of_next_business_week_alt"
          : "time_shortcut.start_of_next_business_week",
      time: nextBusinessWeekStart(timezone),
      timeFormatted: nextBusinessWeekStart(timezone).format(
        I18n.t("dates.long_no_year")
      ),
    },
    {
      icon: "far-clock",
      id: TIME_SHORTCUT_TYPES.NEXT_WEEK,
      label: "time_shortcut.next_week",
      time: nextWeek(timezone),
      timeFormatted: nextWeek(timezone).format(I18n.t("dates.long_no_year")),
    },
    {
      icon: "far-calendar-plus",
      id: TIME_SHORTCUT_TYPES.NEXT_MONTH,
      label: "time_shortcut.next_month",
      time: nextMonth(timezone),
      timeFormatted: nextMonth(timezone).format(I18n.t("dates.long_no_year")),
    },
  ];
}

export function specialShortcutOptions() {
  return [
    {
      icon: "undo",
      id: TIME_SHORTCUT_TYPES.LAST_CUSTOM,
      label: "time_shortcut.last_custom",
      time: null,
      timeFormatted: null,
      hidden: true,
    },
    {
      icon: "calendar-alt",
      id: TIME_SHORTCUT_TYPES.CUSTOM,
      label: "time_shortcut.custom",
      time: null,
      timeFormatted: null,
      isCustomTimeShortcut: true,
    },
    {
      icon: "ban",
      id: TIME_SHORTCUT_TYPES.NONE,
      label: "time_shortcut.none",
      time: null,
      timeFormatted: null,
    },
  ];
}

export function timeShortcutOptions(timezone) {
  return {
    two_weeks() {
      return {
        icon: "far-clock",
        id: TIME_SHORTCUT_TYPES.TWO_WEEKS,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.TWO_WEEKS}`,
        time: startOfDay(now(timezone).add(2, "week")),
        timeFormatKey: "dates.long_no_year",
      };
    },
    two_months() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.TWO_MONTHS,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.TWO_MONTHS}`,
        time: startOfDay(now(timezone).add(2, "month")),
        timeFormatKey: "dates.long_with_year",
      };
    },
    three_months() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.THREE_MONTHS,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.THREE_MONTHS}`,
        time: startOfDay(now(timezone).add(3, "month")),
        timeFormatKey: "dates.long_with_year",
      };
    },
    four_months() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.FOUR_MONTHS,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.FOUR_MONTHS}`,
        time: startOfDay(now(timezone).add(4, "month")),
        timeFormatKey: "dates.long_with_year",
      };
    },
    six_months() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.SIX_MONTHS,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.SIX_MONTHS}`,
        time: startOfDay(now(timezone).add(6, "month")),
        timeFormatKey: "dates.long_with_year",
      };
    },
    one_year() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.ONE_YEAR,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.ONE_YEAR}`,
        time: startOfDay(now(timezone).add(1, "year")),
        timeFormatKey: "dates.long_with_year",
      };
    },
    forever() {
      return {
        icon: "far-calendar-plus",
        id: TIME_SHORTCUT_TYPES.FOREVER,
        label: `time_shortcut.${TIME_SHORTCUT_TYPES.FOREVER}`,
        time: startOfDay(now(timezone).add(1000, "year")),
        timeFormatKey: "dates.long_with_year",
      };
    },
  };
}
