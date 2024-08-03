import {Separator} from '@/components/ui/separator'
import TaskCard from './(components)/TaskCard'
import {Metadata} from 'next'
import TaskControlPanelHeader from './(components)/TaskControlPanelHeader'

export const metadata: Metadata = {
  title: 'Workspace | Tasks',
}

export default function TasksPage() {
  return (
    <div className="py-5 p-3 ">
      <h3 className="text-[16px] font-bold text-blue-800">Tasks Panel</h3>
      <TaskControlPanelHeader />
      <div className="py-5 flex flex-col gap-5">
        <div>
          <h6 className="font-bold mb-2 text-[14px]">| Today Tasks</h6>
          <div className="grid grid-cols-3 gap-5 md:gap-3">
            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="completed"
              username="Lionel"
              userId="id"
            />
            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="in-progress"
              username="Lionel"
              userId="id"
            />
            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="planned"
              username="Lionel"
              userId="id"
            />

            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="pending"
              username="Lionel"
              userId="id"
            />
          </div>
        </div>
        <div>
          <h6 className="font-bold mb-2 text-[14px]">| 2 Aug, 2024 Tasks</h6>
          <div className="grid grid-cols-3 gap-5 md:gap-3">
            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="planned"
              username="Lionel"
              userId="id"
            />

            <TaskCard
              id={crypto.randomUUID()}
              name="Fix some issues on some portal and release new versions and run test cases"
              timestamp={new Date()}
              timeTo={new Date()}
              timeFrom={new Date()}
              status="completed"
              username="Lionel"
              userId="id"
            />
          </div>
        </div>
        <Separator className="my-5" />
      </div>
    </div>
  )
}
