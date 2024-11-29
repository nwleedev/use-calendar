import { CalendarStage } from "@nwleedev/use-calendar";
import { MouseEvent } from "react";

export interface MonthsHeaderProps {
  calendarDate: Date;
  onPrevClick: (event: MouseEvent, year: number) => unknown;
  onNextClick: (event: MouseEvent, year: number) => unknown;
  onMidClick: (event: MouseEvent, stage: CalendarStage) => unknown;
}

const MonthsHeader = (props: MonthsHeaderProps) => {
  const { calendarDate, onPrevClick, onNextClick, onMidClick } = props;

  return (
    <header className="flex justify-center w-full gap-x-4">
      <button
        onClick={(event) => {
          const prevYear = calendarDate.getFullYear() - 1;
          onPrevClick(event, prevYear);
        }}
      >
        {"<"}
      </button>
      <h2
        role="button"
        onClick={(event) => {
          onMidClick(event, CalendarStage.YEARS);
        }}
        className="text-xl font-bold"
      >{`${calendarDate.getFullYear()}`}</h2>
      <button
        onClick={(event) => {
          const nextYear = calendarDate.getFullYear() + 1;
          onNextClick(event, nextYear);
        }}
      >
        {">"}
      </button>
    </header>
  );
};

export default MonthsHeader;
