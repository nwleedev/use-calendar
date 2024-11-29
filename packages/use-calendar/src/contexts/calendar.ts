import { createContext } from "react";
import { CalendarHooks } from "../interfaces/calendar";

const CalendarContext = createContext<CalendarHooks>(null!);

export default CalendarContext;
