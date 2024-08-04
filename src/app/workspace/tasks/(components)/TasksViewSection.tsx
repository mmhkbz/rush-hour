'use client'

import {selectTasksView, useAppState} from '@/store'
import TasksCardViewSection from './TasksCardViewSection'
import TasksTableViewSection from './TasksTableViewSection'

export default function TasksViewSection() {
  const taskViewType = useAppState(selectTasksView)
  return taskViewType === 'card' ? (
    <TasksCardViewSection />
  ) : (
    <TasksTableViewSection />
  )
}
