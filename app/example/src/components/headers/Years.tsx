import { CalendarStage, DateEnums, DateLibs } from '@nwleedev/use-calendar'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MouseEvent } from 'react'
import { Button } from '../ui/button'

export interface YearsHeaderProps {
  calendarDate: Date
  onPrevClick: (event: MouseEvent, year: number) => unknown
  onNextClick: (event: MouseEvent, year: number) => unknown
  onMidClick?: (event: MouseEvent, stage: CalendarStage) => unknown
}

const YearsHeader = (props: YearsHeaderProps) => {
  const { calendarDate, onNextClick, onPrevClick, onMidClick } = props
  const [from, to] = DateLibs.toDecade(calendarDate)
  const title = `${format(from, 'yyyy')} - ${format(to, 'yyyy')}`

  return (
    <header className='flex items-center justify-center w-full gap-x-4'>
      <Button
        onClick={(event) => {
          onPrevClick(event, from.getFullYear() - DateEnums.DECADE)
        }}
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
      >
        <ChevronLeft className='!w-6 !h-6' />
      </Button>
      <h2
        role='button'
        onClick={(event) => {
          onMidClick?.(event, CalendarStage.DECADES)
        }}
        className='text-xl font-bold'
      >
        {title}
      </h2>
      <Button
        onClick={(event) => {
          onNextClick(event, from.getFullYear() + DateEnums.DECADE)
        }}
        className='p-2 text-black bg-transparent rounded-full w-9 h-9 hover:text-white'
      >
        <ChevronRight className='!w-6 !h-6' />
      </Button>
    </header>
  )
}

export default YearsHeader
