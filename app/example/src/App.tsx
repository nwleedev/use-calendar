import useCalendar, {
  CalendarStage,
  DateLibs,
  useNow
} from '@nwleedev/use-calendar'
import { format, getWeek } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Days from './components/Days'
import Decades from './components/Decades'
import {
  DaysHeader,
  DecadesHeader,
  MonthsHeader,
  YearsHeader
} from './components/headers'
import Months from './components/Months'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import Years from './components/Years'

const App = () => {
  const now = useNow()
  const [selectedDate, setSelectedDate] = useState(now)
  const {
    stage,
    date,
    week,
    days,
    months,
    years,
    decades,
    onWeekChange,
    onMonthChange,
    onYearChange,
    onDecadeChange,
    onCenturyChange,
    onStageChange
  } = useCalendar({
    defaultValue: now
  })

  const formatted = format(selectedDate, 'MMMM dd, yyyy')
  const text = `You selected ${formatted}`
  const [isChecked, setIsChecked] = useState(false)

  const weekText = `${'Week'} ${String(DateLibs.getWeekNumber(date)).padStart(2, '0')}`

  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-y-6'>
      <div className='max-w-[480px] flex flex-col w-full items-center gap-y-2'>
        <div className='flex justify-start w-full'>
          <h1 className='text-2xl'>{text}</h1>
        </div>
        <div className='flex items-center justify-end w-full gap-x-2'>
          <Checkbox
            checked={isChecked}
            onCheckedChange={(checkedState) => {
              setIsChecked(!!checkedState)
            }}
          />
          <p>Show days not in current month</p>
        </div>
      </div>
      <div className='flex flex-col w-full gap-y-4 max-w-[480px]'>
        <div className='flex flex-col w-full'>
          {stage === CalendarStage.DAYS && (
            <DaysHeader
              calendarDate={date}
              onPrevClick={(_event, month) => {
                onMonthChange(month)
              }}
              onNextClick={(_event, month) => {
                onMonthChange(month)
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage)
              }}
            />
          )}
          {stage === CalendarStage.MONTHS && (
            <MonthsHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onYearChange(year)
              }}
              onNextClick={(_event, year) => {
                onYearChange(year)
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage)
              }}
            />
          )}
          {stage === CalendarStage.YEARS && (
            <YearsHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onDecadeChange(year)
              }}
              onNextClick={(_event, year) => {
                onDecadeChange(year)
              }}
              onMidClick={(_event, stage) => {
                onStageChange(stage)
              }}
            />
          )}
          {stage === CalendarStage.DECADES && (
            <DecadesHeader
              calendarDate={date}
              onPrevClick={(_event, year) => {
                onCenturyChange(year)
              }}
              onNextClick={(_event, year) => {
                onCenturyChange(year)
              }}
            />
          )}
        </div>

        {stage === CalendarStage.DAYS && (
          <Days
            days={days}
            calendarDate={date}
            onClick={(_event, day) => {
              setSelectedDate(day)
            }}
            showOutside={isChecked}
          />
        )}
        {stage === CalendarStage.MONTHS && (
          <Months
            months={months}
            onClick={(_event, month) => {
              onMonthChange(month.getMonth())
              onStageChange(CalendarStage.DAYS)
            }}
          />
        )}
        {stage === CalendarStage.YEARS && (
          <Years
            years={years}
            onClick={(_event, year) => {
              onYearChange(year.getFullYear())
              onStageChange(CalendarStage.MONTHS)
            }}
          />
        )}
        {stage === CalendarStage.DECADES && (
          <Decades
            decades={decades}
            onClick={(_event, year) => {
              onDecadeChange(year.getFullYear())
              onStageChange(CalendarStage.YEARS)
            }}
          />
        )}
      </div>

      <div className='flex flex-col gap-y-3 items-center w-full max-w-[480px]'>
        <div className='flex items-center justify-center w-full gap-x-2'>
          <Button
            onClick={() => {
              const nextDate = getWeek(date)
              onWeekChange(nextDate - 1)
            }}
            className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
          >
            <ChevronLeft className='!w-6 !h-6' />
          </Button>
          <h2 className='text-lg font-semibold'>{weekText}</h2>
          <Button
            onClick={() => {
              const nextDate = getWeek(date)
              onWeekChange(nextDate + 1)
            }}
            className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
          >
            <ChevronRight className='!w-6 !h-6' />
          </Button>
        </div>
        <div className='flex justify-center w-full gap-x-2'>
          {week.map((day) => {
            const text = format(day, 'iii')
            return (
              <div key={text} className='flex justify-center w-full'>
                <span>{text}</span>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full gap-x-2'>
          {week.map((day) => {
            const text = format(day, 'dd')
            return (
              <Button
                className='flex justify-center w-full'
                key={text}
                onClick={() => {
                  setSelectedDate(day)
                }}
              >
                <span>{text}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
