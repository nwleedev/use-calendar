import { format } from 'date-fns'
import { MouseEvent } from 'react'
import { Button } from './ui/button'

export interface YearsProps {
  years: Date[]
  calendarDate?: Date

  onClick: (event: MouseEvent, year: Date) => unknown
}

const Years = (props: YearsProps) => {
  const { years, onClick } = props

  return (
    <div className='grid w-full grid-cols-3 gap-1'>
      {years.map((year) => {
        return (
          <Button
            onClick={(event) => {
              onClick(event, year)
            }}
            className='flex items-center justify-center w-full h-12'
            key={year.getTime()}
          >
            <span>{format(year, 'yyyy')}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default Years
