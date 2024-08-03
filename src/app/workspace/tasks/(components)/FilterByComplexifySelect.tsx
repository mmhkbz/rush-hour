import {DataSelect} from '@/components/select'

export default function FilterByComplexitySelect() {
  return (
    <DataSelect
      options={[
        {
          label: 'Low',
          value: 'Low',
        },
        {
          label: 'Medium',
          value: 'Medium',
        },
        {
          label: 'High',
          value: 'High',
        },
      ]}
      placeholder="Filter by complexity"
      label="Complexities"
      className="w-[180px] max-w-[300px]"
    />
  )
}
