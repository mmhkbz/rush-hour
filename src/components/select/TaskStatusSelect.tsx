'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'

export function TaskStatusSelect(props: Partial<DataSelectPropsType>) {
  return (
    <DataSelect
      label="Task Status"
      placeholder="Select status"
      options={[
        {value: 'STAT#8wY_FRWJ8M', label: 'Pending'},
        {value: 'STAT#SO2MX2lpbW', label: 'Complete'},
        {value: 'STAT#oneZj8TvRB', label: 'In Progress'},
      ]}
      {...props}
    />
  )
}
