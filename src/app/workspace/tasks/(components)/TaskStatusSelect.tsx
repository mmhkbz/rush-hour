import {DataSelect} from '@/components/select'

export default function TaskStatusSelect() {
  return (
    <DataSelect
      placeholder="Filter by status"
      label="Status"
      options={[
        {
          label: 'Planned',
          value: 'planned',
        },
        {
          label: 'In-Progress',
          value: 'in-progress',
        },
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
      ]}
      className="w-[150px]"
    />
  )
}
