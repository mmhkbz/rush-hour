'use client'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {cn} from '@/libs/utils'
import {CalendarIcon} from '@radix-ui/react-icons'
import {format} from 'date-fns'
import {useEffect, useState} from 'react'

type FilterByDateSelect = {
  onSelect?: (value: Date | undefined) => void
  value?: Date | undefined
  label?: string
}

export default function FilterByDateSelect(props: FilterByDateSelect) {
  const {onSelect, value, label = 'Filter by date'} = props
  const [date, setDate] = useState<Date | undefined>()

  useEffect(() => {
    setDate(value)
  }, [value])

  return (
    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn('w-[250px] justify-start text-left font-normal')}>
            <CalendarIcon className="mr-2 h-4 w-4" />

            {date ? format(date, 'LLL dd, y') : <span>{label}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            defaultMonth={new Date()}
            onSelect={(value) => {
              setDate(value)
              onSelect && onSelect(value)
            }}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
