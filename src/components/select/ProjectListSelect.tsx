'use client'
import {DataSelect, DataSelectPropsType} from './DataSelect'
import {useGetDataList} from '@/hooks'

export default function ProjectListSelect(props: Partial<DataSelectPropsType>) {
  const {data, isPending} = useGetDataList('project-list')
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Projects'}
      placeholder="Select Project"
      options={data || []}
      {...props}
    />
  )
}
