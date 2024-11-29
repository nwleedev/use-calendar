import useCalendar, { CalendarStage, useNow } from "@nwleedev/use-calendar";
import { format } from "date-fns";
import { useState } from "react";
import Days from "./components/Days";
import Decades from "./components/Decades";
import {
  DaysHeader,
  DecadesHeader,
  MonthsHeader,
  YearsHeader,
} from "./components/headers";
import Months from "./components/Months";
import Years from "./components/Years";

const App = () => {
  const now = useNow();
  const [selectedDate, setSelectedDate] = useState(now);
  const {
    stage,
    date,
    days,
    months,
    years,
    decades,
    onMonthChange,
    onYearChange,
    onDecadeChange,
    onCenturyChange,
    onStageChange,
  } = useCalendar({
    defaultValue: now,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-4">
      <div className="max-w-[480px] flex flex-col w-full items-center">
        <h1 className="text-2xl">{format(selectedDate, "yyyy-MM-dd")}</h1>
      </div>
      <div className="flex flex-col w-full gap-y-4 max-w-[480px] ">
        <div className="flex flex-col w-full">
          {stage === CalendarStage.DAYS && (
            <DaysHeader
              calendarDate={date}
              onPrevClick={(_event, month) => {
                onMonthChange(month);
              }}
              onNextClick={(_event, month) => {
                onMonthChange(month);
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage);
              }}
            />
          )}
          {stage === CalendarStage.MONTHS && (
            <MonthsHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onYearChange(year);
              }}
              onNextClick={(_event, year) => {
                onYearChange(year);
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage);
              }}
            />
          )}
          {stage === CalendarStage.YEARS && (
            <YearsHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onDecadeChange(year);
              }}
              onNextClick={(_event, year) => {
                onDecadeChange(year);
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage);
              }}
            />
          )}
          {stage === CalendarStage.DECADES && (
            <DecadesHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onCenturyChange(year);
              }}
              onNextClick={(_event, year) => {
                onCenturyChange(year);
              }}
            />
          )}
        </div>

        {stage === CalendarStage.DAYS && (
          <Days
            days={days}
            calendarDate={date}
            onClick={(_event, day) => {
              setSelectedDate(day);
            }}
          />
        )}
        {stage === CalendarStage.MONTHS && (
          <Months
            months={months}
            onClick={(_event, month) => {
              onMonthChange(month.getMonth());
              onStageChange(CalendarStage.DAYS);
            }}
          />
        )}
        {stage === CalendarStage.YEARS && (
          <Years
            years={years}
            onClick={(_event, year) => {
              onYearChange(year.getFullYear());
              onStageChange(CalendarStage.MONTHS);
            }}
          />
        )}
        {stage === CalendarStage.DECADES && (
          <Decades
            decades={decades}
            onClick={(_event, year) => {
              onDecadeChange(year.getFullYear());
              onStageChange(CalendarStage.YEARS);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
