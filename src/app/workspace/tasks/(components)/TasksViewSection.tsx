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

export default function TasksViewSection() {
  const taskViewType = useAppState(selectTasksView)
  const userInfo = useUserStore(selectInfo)
  const roleInfo = useUserStore(selectRole)

  const {data: tasksByEmployee, isFetching: isGettingTasksByEmployee} =
    useGetTasksByEmployee(
      {
        date: '',
        employee_id: userInfo ? userInfo.employeeId : '',
        task_level_id: '',
        task_status_id: '',
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
