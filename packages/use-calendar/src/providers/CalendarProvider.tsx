import { PropsWithChildren } from "react";
import CalendarContext from "../contexts/calendar";
import { CalendarHooks } from "../interfaces/calendar";

const CalendarProvider = (props: CalendarHooks & PropsWithChildren) => {
  const { children, ...value } = props;
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
