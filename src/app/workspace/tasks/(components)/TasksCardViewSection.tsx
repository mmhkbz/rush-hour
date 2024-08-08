import {Separator} from '@/components/ui/separator'
import TaskCard from './TaskCard'
import {useMemo, useRef} from 'react'
import {isSameDay, isToday} from 'date-fns'

type TasksCardViewSectionProps = {
  tasks: TaskEntity[]
  isPending: boolean
}

export default function TasksCardViewSection(props: TasksCardViewSectionProps) {
  const {tasks, isPending} = props
  const currentPivotedDateRef = useRef<Date | null>(null)

  // plain tasks list into same day groupped tasks
  // const separatedTasks = useMemo(() => {
  //   const result: TaskEntity[][] = [[]]
  //   tasks.forEach((task) => {
  //     // if null, will set first met date to pivoted date
  //     if (!currentPivotedDateRef.current) {
  //       currentPivotedDateRef.current = task.task_start
  //     }
  //     const hasSameDay = isSameDay(
  //       currentPivotedDateRef.current,
  //       task.task_start
  //     )
  //     if(hasSameDay){
  //       const prevTasksForSameDay =
  //     }
  //   })
  // }, [tasks])

  return (
    <div className="py-5 flex flex-col gap-5">
      {/* {tasks.map(task => {
        if(!currentPivotedDateRef.current){
          currentPivotedDateRef.current = task.task_start
        }
        const isSameDay = isSameDay(currentPivotedDateRef.current,task.task_start)
        const isToday = isToday(task.task_start)
        if(isSameDay){
          return ({

          })
        }
      })} */}
      <div>
        <h6 className="font-bold mb-2 text-[14px]">| Today Tasks</h6>
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
