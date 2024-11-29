import { CalendarStage, DateEnums, DateLibs } from "@nwleedev/use-calendar";
import { format } from "date-fns";
import { MouseEvent } from "react";

export interface YearsHeaderProps {
  calendarDate: Date;
  onPrevClick: (event: MouseEvent, year: number) => unknown;
  onNextClick: (event: MouseEvent, year: number) => unknown;
  onMidClick?: (event: MouseEvent, stage: CalendarStage) => unknown;
}

const YearsHeader = (props: YearsHeaderProps) => {
  const { calendarDate, onNextClick, onPrevClick, onMidClick } = props;
  const [from, to] = DateLibs.toDecade(calendarDate);
  const title = `${format(from, "yyyy")} ~ ${format(to, "yyyy")}`;

  return (
    <header className="flex justify-center w-full gap-x-4">
      <button
        onClick={(event) => {
          onPrevClick(event, from.getFullYear() - DateEnums.DECADE);
        }}
      >
        {"<"}
      </button>
      <h2
        role="button"
        onClick={(event) => {
          onMidClick?.(event, CalendarStage.DECADES);
        }}
        className="text-xl font-bold"
      >
        {title}
      </h2>
      <button
        onClick={(event) => {
          onNextClick(event, from.getFullYear() + DateEnums.DECADE);
        }}
      >
        {">"}
      </button>
    </header>
  );
};

export default YearsHeader;
