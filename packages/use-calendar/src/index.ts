import useCalendar from "./hooks/useCalendar";
import useCalendarContext from "./hooks/useCalendarContext";
import useNow from "./hooks/useNow";

import CalendarContext from "./contexts/calendar";

import { CalendarHooks } from "./interfaces/calendar";

import CalendarProvider from "./providers/CalendarProvider";

export * from "./libs";
export {
  CalendarContext,
  CalendarProvider,
  useCalendar,
  useCalendarContext,
  useNow,
};
export type { CalendarHooks };
export default useCalendar;
