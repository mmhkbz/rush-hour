'use client'

import {cn} from '@/libs/utils'
import {FormControl} from '../ui/form'
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover'
import {CalendarIcon} from '@radix-ui/react-icons'
import {Button} from '../ui/button'
import {Calendar} from '../ui/calendar'
import {TimePickerSelect} from './TimePickerSelect'
import {format} from 'date-fns'
import {Matcher} from 'react-day-picker'

type DateTimePickerSelectProps = {
  value?: Date
  onChange: (value: Date | undefined) => void
  disabled?: Matcher
  label?: string
}

export function DateTimePickerSelect(props: DateTimePickerSelectProps) {
  const {value, onChange, label = 'Pick a date', disabled} = props
  return (
    <Popover>
      <FormControl>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-[280px] justify-start ms-3 text-left font-normal',
              !value && 'text-muted-foreground'
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, 'PPP HH:mm:ss') : <span>{label}</span>}
          </Button>
        </PopoverTrigger>
      </FormControl>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          disabled={disabled}
        />
        <div className="p-3 border-t border-border">
          <TimePickerSelect setDate={onChange} date={value} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
