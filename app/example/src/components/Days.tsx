import { DateLibs } from "@nwleedev/use-calendar";
import { MouseEvent } from "react";

export interface DaysProps {
  days: Date[];
  calendarDate: Date;

  onClick: (event: MouseEvent, day: Date) => unknown;
}

const Days = (props: DaysProps) => {
  const { days, calendarDate, onClick } = props;

  return (
    <div className="grid w-full grid-cols-7 gap-1">
      {days.map((day) => {
        const isMonthEqual = DateLibs.isMonthEqual(day, calendarDate);
        if (!isMonthEqual) {
          return (
            <div
              key={day.getTime()}
              className="flex items-center justify-center w-full h-10"
            >
              <span className="text-gray-500">{day.getDate()}</span>
            </div>
          );
        }
        return (
          <div
            key={day.getTime()}
            className="flex items-center justify-center w-full h-10"
          >
            <button
              onClick={(event) => {
                onClick(event, day);
              }}
            >
              <span>{day.getDate()}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Days;
