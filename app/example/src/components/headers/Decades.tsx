import { CalendarStage, DateEnums, DateLibs } from "@nwleedev/use-calendar";
import { format } from "date-fns";
import { MouseEvent } from "react";

export interface DecadesHeaderProps {
  calendarDate: Date;
  onPrevClick: (event: MouseEvent, year: number) => unknown;
  onNextClick: (event: MouseEvent, year: number) => unknown;
  onMidClick?: (event: MouseEvent, stage: CalendarStage) => unknown;
}

const DecadesHeader = (props: DecadesHeaderProps) => {
  const { calendarDate, onNextClick, onPrevClick } = props;
  const [from, to] = DateLibs.toCentury(calendarDate);
  const title = `${format(from, "yyyy")} ~ ${format(to, "yyyy")}`;

  return (
    <header className="flex justify-center w-full gap-x-4">
      <button
        onClick={(event) => {
          onPrevClick(event, from.getFullYear() - DateEnums.CENTURY);
        }}
      >
        {"<"}
      </button>
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        onClick={(event) => {
          onNextClick(event, from.getFullYear() + DateEnums.CENTURY);
        }}
      >
        {">"}
      </button>
    </header>
  );
};

export default DecadesHeader;
