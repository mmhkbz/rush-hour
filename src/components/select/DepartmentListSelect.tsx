'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'
import {useGetDataList} from '@/hooks'

export default function DepartmentListSelect(
  props: Partial<DataSelectPropsType>
) {
  const {data, isPending} = useGetDataList('department-list')
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Teams'}
      placeholder="Select Department"
      options={data || []}
      {...props}
    />
  )
}
