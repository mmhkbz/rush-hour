'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'

export function TaskLevelSelect(props: Partial<DataSelectPropsType>) {
  return (
    <DataSelect
      label="Task Level"
      placeholder="Select task level"
      options={[
        {value: 'LEV#BdS8WRoq-W', label: 'Supply Chain'},
        {value: 'LEV#PyqfniWfwO', label: 'Medium'},
        {value: 'LEV#qk52WEP2BQ', label: 'High'},
        {value: 'LEV#szB3uywN4d', label: 'Low'},
      ]}
      {...props}
    />
  )
}
