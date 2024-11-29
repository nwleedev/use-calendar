import { CalendarStage } from "@nwleedev/use-calendar";
import { format } from "date-fns";
import { MouseEvent } from "react";

export interface DaysHeaderProps {
  calendarDate: Date;
  onPrevClick: (event: MouseEvent, month: number) => unknown;
  onNextClick: (event: MouseEvent, month: number) => unknown;
  onMidClick: (event: MouseEvent, stage: CalendarStage) => unknown;
}

const DaysHeader = (props: DaysHeaderProps) => {
  const { calendarDate, onPrevClick, onNextClick, onMidClick } = props;

  return (
    <header className="flex justify-center w-full gap-x-4">
      <button
        onClick={(event) => {
          const prevMonth = calendarDate.getMonth() - 1;
          onPrevClick(event, prevMonth);
        }}
      >
        {"<"}
      </button>
      <h2
        role="button"
        onClick={(event) => {
          onMidClick(event, CalendarStage.MONTHS);
        }}
        className="text-xl font-bold"
      >
        {format(calendarDate, "MMMM yyyy")}
      </h2>
      <button
        onClick={(event) => {
          const nextMonth = calendarDate.getMonth() + 1;
          onNextClick(event, nextMonth);
        }}
      >
        {">"}
      </button>
    </header>
  );
};

export default DaysHeader;
