import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  setYear,
  startOfDecade,
  startOfMonth,
  startOfYear,
  subDays,
} from "date-fns";
import { DateEnums } from "./enums";

export class CalendarLibs {
  static createBeforeDays(from: Date) {
    const array = [] as Date[];
    const fromDay = from.getDay();
    for (let index = 0; index < fromDay; index++) {
      const sub = fromDay - index;
      const date = subDays(from, sub);
      array.push(date);
    }
    return array;
  }
  static createAfterDays(end: Date) {
    const array = [] as Date[];
    const endDay = end.getDay();
    for (let index = endDay + 1; index < DateEnums.WEEKDAY; index++) {
      const add = index - endDay;
      const date = addDays(end, add);
      array.push(date);
    }

    return array;
  }

  static createMonthDays(date: Date) {
    const from = startOfMonth(date);
    const end = endOfMonth(date);
    const array = [] as Date[];
    const fromDate = from.getDate();
    const endDate = end.getDate();

    array.push(...CalendarLibs.createBeforeDays(from));
    for (let index = fromDate; index <= endDate; index++) {
      const add = index - fromDate;
      const date = addDays(from, add);
      array.push(date);
    }
    array.push(...CalendarLibs.createAfterDays(end));

    return array;
  }

  static createYearMonths(date: Date) {
    const from = startOfYear(date);
    const array = [] as Date[];
    for (let i = 0; i < DateEnums.MONTHS; i++) {
      const date = addMonths(from, i);
      array.push(date);
    }
    return array;
  }

  static createDecadeYears(date: Date) {
    const from = startOfDecade(date);
    const array = [] as Date[];
    for (let i = 0; i < DateEnums.DECADE; i++) {
      const date = addYears(from, i);
      array.push(date);
    }
    return array;
  }

  static createFullDecades(date: Date) {
    const fromYear =
      Math.floor(date.getFullYear() / DateEnums.CENTURY) * DateEnums.CENTURY;
    const array = [] as [Date, Date][];
    const from = setYear(startOfYear(date), fromYear);
    const len = DateEnums.CENTURY / DateEnums.DECADE;
    for (let index = 0; index < len; index++) {
      const fromDecade = addYears(from, index * DateEnums.DECADE);
      const endDecade = addYears(from, (index + 1) * DateEnums.DECADE);
      array.push([fromDecade, endDecade]);
    }
    return array;
  }
}
