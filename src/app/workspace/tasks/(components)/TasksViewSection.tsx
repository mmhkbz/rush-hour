'use client'

import {selectInfo, selectTasksView, useAppState, useUserStore} from '@/store'
import TasksCardViewSection from './TasksCardViewSection'
import TasksTableViewSection from './TasksTableViewSection'
import {useGetTasksByEmployee} from '../hooks/useGetTasksByEmployee'

export default function TasksViewSection() {
  const taskViewType = useAppState(selectTasksView)
  const userInfo = useUserStore(selectInfo)

  const {data: tasks, isPending} = useGetTasksByEmployee({
    date: '',
    employee_id: userInfo ? userInfo.employeeId : '',
    task_level_id: '',
    task_status_id: '',
  })

  return taskViewType === 'card' ? (
    <TasksCardViewSection tasks={tasks || []} isPending={isPending} />
  ) : (
    <TasksTableViewSection tasks={tasks || []} isPending={isPending} />
  )
}
