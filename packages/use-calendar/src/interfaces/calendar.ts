import { CalendarStage } from "../libs";

export interface CalendarHooks {
  stage: CalendarStage;
  date: Date;
  days: Date[];
  months: Date[];
  years: Date[];
  decades: [Date, Date][];
  onDateChange: (date: Date) => unknown;
  onDayChange: (day: number) => unknown;
  onMonthChange: (month: number) => unknown;
  onYearChange: (year: number) => unknown;
  onDecadeChange: (year: number) => unknown;
  onCenturyChange: (year: number) => unknown;
  onStageChange: (stage: CalendarStage) => unknown;
}
