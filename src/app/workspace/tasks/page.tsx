import {Separator} from '@/components/ui/separator'
import TaskCard from './(components)/TaskCard'
import {Metadata} from 'next'
import TaskControlPanelHeader from './(components)/TaskControlPanelHeader'
import TasksViewSection from './(components)/TasksViewSection'

export const metadata: Metadata = {
  title: 'Workspace | Tasks',
}

export default function TasksPage() {
  return (
    <div className="py-5 p-3 overflow-scroll">
      <h3 className="text-[16px] font-bold text-blue-800">Tasks Panel</h3>
      <TaskControlPanelHeader />
      <TasksViewSection />
    </div>
  )
}
