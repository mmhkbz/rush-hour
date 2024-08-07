'use client'
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
import {cache, Fragment} from 'react'

type LabelAndValueType = {
  label: string
  value: string | number
}

export type DataSelectPropsType = SelectProps & {
  options: LabelAndValueType[]
  label: string
  placeholder?: string
  className?: string
  onAfterChange?: (value: LabelAndValueType) => void
}

const getIndex = cache((items: LabelAndValueType[], value: string) =>
  items.findIndex((option) => option.value === value)
)

export function DataSelect(props: DataSelectPropsType) {
  const {
    options,
    label,
    placeholder = 'Select items',
    className = '',
    onAfterChange,
    onValueChange,
    ...otherProps
  } = props

  return (
    <Select
      onValueChange={(value) => {
        const foundIndex = getIndex(options, value)
        onValueChange && onValueChange(value)
        onAfterChange &&
          onAfterChange({
            value,
            label: options[foundIndex].label,
          })
      }}
      {...otherProps}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-w-[350px]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <Fragment key={option.value}>
              <SelectItem
                key={option.value}
                onClick={() => onAfterChange && onAfterChange(option)}
                value={option.value.toString()}>
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
