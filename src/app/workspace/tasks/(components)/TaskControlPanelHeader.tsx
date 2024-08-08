'use client'
import FilterByDateSelect from './FilterByDateSelect'
import TaskViewTypeSwitch from './TaskViewTypeSwitch'
import {Card} from '@/components/ui/card'
import TaskNewControlButton from './TaskNewControlButton'
import {Button} from '@/components/ui/button'
import {usePathname, useRouter} from 'next/navigation'
import {useCallback, useEffect, useState} from 'react'
import {useDebouncedValue} from '@mantine/hooks'
import {
  TaskLevelSelect,
  TaskStatusSelect,
  TeamSelect,
} from '@/components/select'
import {format} from 'date-fns'

export default function TaskControlPanelHeader() {
  const pathname = usePathname()
  const {push} = useRouter()
  const [filterState, setFilterState] = useState<{
    date?: number
    task_status_id?: string
    team_id?: string
    task_level_id?: string
  }>({})
  // debounced to filter state
  const [debouncedState] = useDebouncedValue(filterState, 500)

  const onRemoveFilter = useCallback(() => {
    push(pathname)
    setFilterState({})
  }, [pathname, push, setFilterState])

  // listener for debounced state for querying
  useEffect(() => {
    const searchObject: Record<string, string> = {}
    Object.entries(debouncedState).forEach(([key, value]) => {
      if (key === 'date') {
        searchObject[key] = encodeURIComponent(
          format(new Date(value), 'yyyy-MM-dd')
        )
        return
      }
      searchObject[key] = encodeURIComponent(value as string)
    })
    push(pathname + `?${new URLSearchParams(searchObject).toString()}`)
  }, [debouncedState, pathname, push])

  return (
    <Card className="w-[100%] p-5  mb-3 rounded-sm flex pe-5 gap-8 flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-3 justify-start ">
        <FilterByDateSelect
          onSelect={(value) =>
            setFilterState((prev) => ({
              ...prev,
              date: value ? value?.getTime() : undefined,
            }))
          }
        />
        <TaskStatusSelect
          className="max-w-[150px]"
          onValueChange={(value) =>
            setFilterState((prev) => ({...prev, task_status_id: value}))
          }
        />
        <TeamSelect
          className="max-w-[250px]"
          onValueChange={(value) =>
            setFilterState((prev) => ({...prev, team_id: value}))
          }
        />
        <TaskLevelSelect
          className="max-w-[200px]"
          onValueChange={(value) =>
            setFilterState((prev) => ({...prev, task_level_id: value}))
          }
        />
        <Button onClick={onRemoveFilter} variant="destructive">
          Remove Filter
        </Button>
      </div>
      <div className="flex w-[100%] md:w-auto flex-wrap gap-8 items-center justify-between ">
        <TaskViewTypeSwitch />
        <TaskNewControlButton />
      </div>
    </Card>
  )
}
