import { CalendarStage } from '@nwleedev/use-calendar'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MouseEvent } from 'react'
import { Button } from '../ui/button'

export interface DaysHeaderProps {
  calendarDate: Date
  onPrevClick: (event: MouseEvent, month: number) => unknown
  onNextClick: (event: MouseEvent, month: number) => unknown
  onMidClick: (event: MouseEvent, stage: CalendarStage) => unknown
}

const DaysHeader = (props: DaysHeaderProps) => {
  const { calendarDate, onPrevClick, onNextClick, onMidClick } = props

  return (
    <header className='flex items-center justify-center w-full gap-x-4'>
      <Button
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
        onClick={(event) => {
          const prevMonth = calendarDate.getMonth() - 1
          onPrevClick(event, prevMonth)
        }}
      >
        <ChevronLeft className='!w-6 !h-6' />
      </Button>
      <div className='w-[160px] flex items-center justify-center flex-col'>
        <h2
          role='button'
          onClick={(event) => {
            onMidClick(event, CalendarStage.MONTHS)
          }}
          className='text-xl font-bold'
        >
          {format(calendarDate, 'MMMM yyyy')}
        </h2>
      </div>
      <Button
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
        onClick={(event) => {
          const nextMonth = calendarDate.getMonth() + 1
          onNextClick(event, nextMonth)
        }}
      >
        <ChevronRight className='!w-6 !h-6' />
      </Button>
    </header>
  )
}

export default DaysHeader
