import {Separator} from '@/components/ui/separator'
import TaskCard from './TaskCard'

export default function TasksCardViewSection() {
  return (
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
  )
}
