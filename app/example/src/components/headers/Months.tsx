import { CalendarStage } from '@nwleedev/use-calendar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MouseEvent } from 'react'
import { Button } from '../ui/button'

export interface MonthsHeaderProps {
  calendarDate: Date
  onPrevClick: (event: MouseEvent, year: number) => unknown
  onNextClick: (event: MouseEvent, year: number) => unknown
  onMidClick: (event: MouseEvent, stage: CalendarStage) => unknown
}

const MonthsHeader = (props: MonthsHeaderProps) => {
  const { calendarDate, onPrevClick, onNextClick, onMidClick } = props

  return (
    <header className='flex items-center justify-center w-full gap-x-4'>
      <Button
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
        onClick={(event) => {
          const prevYear = calendarDate.getFullYear() - 1
          onPrevClick(event, prevYear)
        }}
      >
        <ChevronLeft className='!w-6 !h-6' />
      </Button>
      <h2
        role='button'
        onClick={(event) => {
          onMidClick(event, CalendarStage.YEARS)
        }}
        className='text-xl font-bold'
      >{`${calendarDate.getFullYear()}`}</h2>
      <Button
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
        onClick={(event) => {
          const nextYear = calendarDate.getFullYear() + 1
          onNextClick(event, nextYear)
        }}
      >
        <ChevronRight className='!w-6 !h-6' />
      </Button>
    </header>
  )
}

export default MonthsHeader
