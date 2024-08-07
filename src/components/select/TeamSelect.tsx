'use client'
import {useGetTeams} from '@/hooks/useGetTeams'
import {DataSelect} from './DataSelect'

type TeamSelectPropType = {
  onSelect: (value: number | string) => void
}

export default function TeamSelect(props: TeamSelectPropType) {
  const {onSelect} = props
  const {data: teams, isPending} = useGetTeams()
  return (
    <DataSelect
      label={isPending ? 'Loading...' : 'Teams'}
      placeholder="Select Team"
      options={teams || []}
      onValueChange={onSelect}
    />
  )
}
