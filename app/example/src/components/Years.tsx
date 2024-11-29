import { format } from "date-fns";
import { MouseEvent } from "react";

export interface YearsProps {
  years: Date[];
  calendarDate?: Date;

  onClick: (event: MouseEvent, year: Date) => unknown;
}

const Years = (props: YearsProps) => {
  const { years, onClick } = props;

  return (
    <div className="grid w-full grid-cols-3 gap-1">
      {years.map((year) => {
        return (
          <div
            className="flex items-center justify-center w-full h-10"
            key={year.getTime()}
          >
            <button
              onClick={(event) => {
                onClick(event, year);
              }}
            >
              <span>{format(year, "yyyy")}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Years;
