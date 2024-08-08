'use client'
import {useGetTeams} from '@/hooks/useGetTeams'
import {DataSelect, DataSelectPropsType} from './DataSelect'

export function TeamSelect(props: Partial<DataSelectPropsType>) {
  const {data, isPending} = useGetTeams()
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Teams'}
      placeholder="Select Team"
      options={data || []}
      {...props}
    />
  )
}
