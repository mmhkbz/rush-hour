import {Separator} from '@/components/ui/separator'
import TaskCard from './TaskCard'
import {selectRole, useUserStore} from '@/store'

type TasksCardViewSectionProps = {
  tasks: TaskEntity[]
  isPending: boolean
}

export default function TasksCardViewSection(props: TasksCardViewSectionProps) {
  const {tasks, isPending} = props
  const roleInfo = useUserStore(selectRole)

  return (
    <div className="py-5 flex flex-col gap-5">
      <div>
        <h6 className="font-bold mb-2 text-[14px]">
          |{' '}
          {roleInfo
            ? roleInfo.isAdmin
              ? 'Your Team Tasks Records'
              : 'Your Tasks Records'
            : 'Your Tasks Recods'}
        </h6>
        <div className="grid grid-cols-3 gap-5 md:gap-3">
          {tasks.map((task) => (
            <TaskCard {...task} key={task.SK} />
          ))}
        </div>
      </div>
      <Separator className="my-5" />
    </div>
  )
}
