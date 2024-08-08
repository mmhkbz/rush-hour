'use client'

import {
  selectInfo,
  selectRole,
  selectTasksView,
  useAppState,
  useUserStore,
} from '@/store'
import TasksCardViewSection from './TasksCardViewSection'
import TasksTableViewSection from './TasksTableViewSection'
import {useGetTasksByEmployee} from '../hooks/useGetTasksByEmployee'
import {useGetTasksByTeam} from '../hooks/useGetTasksByTeam'
import {TaskViewProvider} from '../context/TaskViewContext'
import TaskEditSheet from './TaskEditSheet'
import {useSearchParams} from 'next/navigation'
import {useMemo} from 'react'

export default function TasksViewSection() {
  const taskViewType = useAppState(selectTasksView)
  const userInfo = useUserStore(selectInfo)
  const roleInfo = useUserStore(selectRole)
  const params = useSearchParams()
  const paramsObj = useMemo(() => {
    return Object.entries(Object.fromEntries(params)).reduce((prev, cur) => {
      prev[cur[0]] = decodeURIComponent(cur[1])
      return prev
    }, {} as Record<string, string>)
  }, [params])

  const {data: tasksByEmployee, isFetching: isGettingTasksByEmployee} =
    useGetTasksByEmployee(
      {
        date: '',
        employee_id: userInfo ? userInfo.employeeId : '',
        task_level_id: '',
        task_status_id: '',
        ...paramsObj,
      },
      roleInfo ? !roleInfo.isAdmin : false // only not admin
    )
  const {data: tasksByTeam, isFetching: isGettingTasksByTeam} =
    useGetTasksByTeam(
      {
        date: new Date().toDateString(),
        team_id: userInfo ? userInfo.teamId : '',
        task_level_id: '',
        task_status_id: '',
        search_item: '',
        ...paramsObj,
      },
      roleInfo ? roleInfo.isAdmin : false // only admin
    )

  return (
    <TaskViewProvider>
      {taskViewType === 'card' ? (
        <TasksCardViewSection
          tasks={tasksByEmployee || tasksByTeam || []}
          isPending={isGettingTasksByEmployee || isGettingTasksByTeam}
        />
      ) : (
        <TasksTableViewSection
          tasks={tasksByEmployee || tasksByTeam || []}
          isPending={isGettingTasksByEmployee || isGettingTasksByTeam}
        />
      )}
      <TaskEditSheet />
    </TaskViewProvider>
  )
}
