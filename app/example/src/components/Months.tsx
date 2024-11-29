import { format } from "date-fns";
import { MouseEvent } from "react";

export interface MonthsProps {
  months: Date[];
  calendarDate?: Date;

  onClick: (event: MouseEvent, month: Date) => unknown;
}

const Months = (props: MonthsProps) => {
  const { months, onClick } = props;

  return (
    <div className="grid w-full grid-cols-4 gap-1">
      {months.map((month) => {
        return (
          <div
            className="flex items-center justify-center w-full h-10"
            key={month.getTime()}
          >
            <button
              onClick={(event) => {
                onClick(event, month);
              }}
            >
              <span>{format(month, "yyyy-MM")}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Months;
