import { CalendarStage } from '../libs'

export interface CalendarHooks {
  stage: CalendarStage
  date: Date
  week: Date[]
  days: Date[]
  months: Date[]
  years: Date[]
  decades: [Date, Date][]
  onDateChange: (date: Date) => unknown
  onWeekChange: (date: number) => unknown
  onDayChange: (day: number) => unknown
  onMonthChange: (month: number) => unknown
  onYearChange: (year: number) => unknown
  onDecadeChange: (year: number) => unknown
  onCenturyChange: (year: number) => unknown
  onStageChange: (stage: CalendarStage) => unknown
}
