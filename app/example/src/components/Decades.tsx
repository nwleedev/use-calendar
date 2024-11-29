import { format } from "date-fns";
import { MouseEvent } from "react";

export interface DecadesProps {
  decades: [Date, Date][];
  calendarDate?: Date;

  onClick: (event: MouseEvent, year: Date) => unknown;
}

const Decades = (props: DecadesProps) => {
  const { decades, onClick } = props;

  return (
    <div className="grid w-full grid-cols-3 gap-1">
      {decades.map((decade) => {
        const [from, to] = decade;
        const text = `${format(from, "yyyy")} ~ ${format(to, "yyyy")}`;
        return (
          <div
            className="flex items-center justify-center w-full h-10"
            key={from.getTime()}
          >
            <button
              onClick={(event) => {
                onClick(event, from);
              }}
            >
              <span>{text}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Decades;
