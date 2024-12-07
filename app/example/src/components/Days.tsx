import { DateLibs } from '@nwleedev/use-calendar'
import { MouseEvent } from 'react'
import { Button } from './ui/button'

export interface DaysProps {
  days: Date[]
  calendarDate: Date
  showOutside?: boolean

  onClick: (event: MouseEvent, day: Date) => unknown
}

const Days = (props: DaysProps) => {
  const { days, calendarDate, showOutside = true, onClick } = props

  return (
    <div className='w-full h-[280px] flex flex-col items-start'>
      <div className='grid w-full grid-cols-7 gap-x-4 gap-y-2'>
        {days.map((day) => {
          const isMonthEqual = DateLibs.isMonthEqual(day, calendarDate)
          if (!isMonthEqual) {
            if (!showOutside) {
              return (
                <div
                  key={day.getTime()}
                  className='flex items-center justify-center w-full h-10'
                />
              )
            }
            return (
              <div
                key={day.getTime()}
                className='flex items-center justify-center w-full h-10'
              >
                <span className='text-gray-300'>{day.getDate()}</span>
              </div>
            )
          }
          return (
            <Button
              onClick={(event) => {
                onClick(event, day)
              }}
              key={day.getTime()}
              className='flex items-center justify-center'
            >
              <span>{day.getDate()}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default Days
