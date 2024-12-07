import { format } from 'date-fns'
import { MouseEvent } from 'react'
import { Button } from './ui/button'

export interface MonthsProps {
  months: Date[]
  calendarDate?: Date

  onClick: (event: MouseEvent, month: Date) => unknown
}

const Months = (props: MonthsProps) => {
  const { months, onClick } = props

  return (
    <div className='grid w-full grid-cols-4 gap-x-3 gap-y-2'>
      {months.map((month) => {
        return (
          <Button
            onClick={(event) => {
              onClick(event, month)
            }}
            key={month.getDate()}
            className='flex items-center justify-center w-full h-12'
          >
            <span>{format(month, 'MMMM')}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default Months
