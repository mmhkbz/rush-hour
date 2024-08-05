'use client'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {cn} from '@/libs/utils'
import {CalendarIcon} from '@radix-ui/react-icons'
import {format} from 'date-fns'
import {useState} from 'react'
import {DateRange} from 'react-day-picker'

export default function FilterByDateSelect() {
  const [date, setDate] = useState<DateRange | undefined>()
  return (
    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn('w-[250px] justify-start text-left font-normal')}>
            <CalendarIcon className="mr-2 h-4 w-4" />

            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Filter by date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()}
            onSelect={setDate}
            selected={date}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
