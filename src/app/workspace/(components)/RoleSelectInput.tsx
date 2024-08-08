import {DataSelect, DataSelectPropsType} from '@/components/select'

type RoleSelectInputPropsType = {
  onSelect: (value: string | number) => void
} & Partial<DataSelectPropsType>

export default function RoleSelectInput(props: RoleSelectInputPropsType) {
  const {onSelect, ...otherProps} = props
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
      {...otherProps}
    />
  )
}
