import { setDay, setMonth, setWeek, setYear } from 'date-fns'
import { useState } from 'react'
import { CalendarHooks } from '../interfaces/calendar'
import { CalendarLibs, CalendarStage, DateEnums, DateLibs } from '../libs'

export interface UseCalendarProps {
  defaultValue?: Date
}

const useCalendar = (props: UseCalendarProps): CalendarHooks => {
  const { defaultValue } = props
  const [date, setDate] = useState(DateLibs.createDefaultDate(defaultValue))
  const [stage, setStage] = useState(CalendarStage.DAYS)

  const week = CalendarLibs.createWeekDays(date)
  const days = CalendarLibs.createMonthDays(date)
  const months = CalendarLibs.createYearMonths(date)
  const years = CalendarLibs.createDecadeYears(date)
  const decades = CalendarLibs.createFullDecades(date)

  const onMonthChange = (month: number) => {
    setDate((date) => {
      return setMonth(date, month)
    })
  }

  const onWeekChange = (week: number) => {
    setDate((date) => {
      return setWeek(date, week)
    })
  }

  const onYearChange = (year: number) => {
    setDate((date) => {
      return setYear(date, year)
    })
  }

  const onDayChange = (day: number) => {
    setDate((date) => {
      return setDay(date, day)
    })
  }

  const onDecadeChange = (year: number) => {
    year = Math.floor(year / DateEnums.DECADE) * DateEnums.DECADE
    setDate((date) => {
      return setYear(date, year)
    })
  }

  const onCenturyChange = (year: number) => {
    year = Math.floor(year / DateEnums.CENTURY) * DateEnums.CENTURY
    setDate((date) => {
      return setYear(date, year)
    })
  }

  const onStageChange = (stage: CalendarStage) => {
    setStage(stage)
  }

  const onDateChange = (date: Date) => {
    setDate(new Date(date))
  }

  return {
    stage,
    date,
    week,
    days,
    months,
    years,
    decades,
    onDateChange,
    onWeekChange,
    onDayChange,
    onMonthChange,
    onYearChange,
    onStageChange,
    onDecadeChange,
    onCenturyChange
  }
}

export default useCalendar
