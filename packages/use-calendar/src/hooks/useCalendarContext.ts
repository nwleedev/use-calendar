import { useContext } from "react";
import CalendarContext from "../contexts/calendar";

const useCalendarContext = () => {
  const contextValues = useContext(CalendarContext);

  if (contextValues === undefined || contextValues === null) {
    throw new Error("useCalendarContext must be used in a CalendarProvider.");
  }

  return contextValues;
};

export default useCalendarContext;
