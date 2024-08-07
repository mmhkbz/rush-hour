'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'
import {useGetDataList} from '@/hooks'

export default function TaskCategoryListSelect(
  props: Partial<DataSelectPropsType>
) {
  const {data, isPending} = useGetDataList('task-category-list')
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Task category'}
      placeholder="Select task category"
      options={data || []}
      {...props}
    />
  )
}
