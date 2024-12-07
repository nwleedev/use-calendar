import {
  addYears,
  endOfWeek,
  getWeekOfMonth,
  setYear,
  startOfDay,
  startOfWeek
} from 'date-fns'
import { DateEnums } from './enums'

export class DateLibs {
  static createDefaultDate(defaultDate?: Date) {
    const now = new Date()
    if (defaultDate === undefined) {
      return now
    }
    if (isNaN(defaultDate.getTime())) {
      return now
    }
    return startOfDay(defaultDate)
  }
  static isYearEqual(source: Date, target: Date) {
    return source.getFullYear() === target.getFullYear()
  }
  static isMonthEqual(source: Date, target: Date) {
    return source.getMonth() === target.getMonth()
  }
  static isDateEqual(source: Date, target: Date) {
    return source.getDate() === target.getDate()
  }
  static isDayEqual(source: Date, target: Date) {
    return source.getDay() === target.getDay()
  }

  static toDecade(date: Date) {
    const year = date.getFullYear()
    const fromYear = Math.floor(year / DateEnums.DECADE) * DateEnums.DECADE
    const from = setYear(year, fromYear)
    const to = addYears(from, DateEnums.DECADE)
    return [from, to] as const
  }

  static toCentury(date: Date) {
    const year = date.getFullYear()
    const fromYear = Math.floor(year / DateEnums.CENTURY) * DateEnums.CENTURY
    const from = setYear(year, fromYear)
    const to = addYears(from, DateEnums.CENTURY)
    return [from, to] as const
  }

  static getWeekNumber(date: Date) {
    const from = startOfWeek(date)
    const end = endOfWeek(date)
    const weekNum = getWeekOfMonth(from)

    if (DateLibs.isMonthEqual(from, end)) {
      return weekNum
    } else {
      return DateEnums.FIRST_WEEK
    }
  }
}
