import { format } from 'date-fns'
import { MouseEvent } from 'react'
import { Button } from './ui/button'

export interface DecadesProps {
  decades: [Date, Date][]
  calendarDate?: Date

  onClick: (event: MouseEvent, year: Date) => unknown
}

const Decades = (props: DecadesProps) => {
  const { decades, onClick } = props

  return (
    <div className='grid w-full grid-cols-3 gap-1'>
      {decades.map((decade) => {
        const [from, to] = decade
        const text = `${format(from, 'yyyy')} - ${format(to, 'yyyy')}`
        return (
          <Button
            onClick={(event) => {
              onClick(event, from)
            }}
            className='flex items-center justify-center w-full h-10'
            key={from.getTime()}
          >
            <span>{text}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default Decades
