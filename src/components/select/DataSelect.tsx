import {SelectProps} from '@radix-ui/react-select'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Separator} from '../ui/separator'
import {Fragment} from 'react'

type DataSelectPropsType = SelectProps & {
  options: {
    label: string
    value: string | number
  }[]
  label: string
  placeholder?: string
  className?: string
}

export function DataSelect(props: DataSelectPropsType) {
  const {
    options,
    label,
    placeholder = 'Select items',
    className = '',
    ...otherProps
  } = props
  return (
    <Select {...otherProps}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-w-[350px]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <Fragment key={option.value}>
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
              <Separator />
            </Fragment>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
