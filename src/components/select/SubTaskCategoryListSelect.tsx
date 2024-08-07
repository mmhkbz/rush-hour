'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'
import {useGetDataList} from '@/hooks'

export default function SubTaskCategoryListSelect(
  props: Partial<DataSelectPropsType>
) {
  const {data, isPending} = useGetDataList('subtask-category-list')
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Sub-task category'}
      placeholder="Select sub-task category"
      options={data || []}
      {...props}
    />
  )
}
