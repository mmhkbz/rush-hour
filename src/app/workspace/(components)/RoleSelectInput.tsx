import {DataSelect} from '@/components/select'

type RoleSelectInputPropsType = {
  onSelect: (value: string | number) => void
}

export default function RoleSelectInput(props: RoleSelectInputPropsType) {
  const {onSelect} = props
  return (
    <DataSelect
      label="Role"
      onValueChange={onSelect}
      placeholder="Select role"
      options={[
        {
          label: 'Admin',
          value: 1,
        },
        {
          label: 'User',
          value: 2,
        },
      ]}
    />
  )
}
