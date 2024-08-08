import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Badge} from '@/components/ui/badge'
import {Card} from '@/components/ui/card'
import {cn} from '@/libs/utils'
import {IconArrowRight, IconGripVertical} from '@tabler/icons-react'
import {format} from 'date-fns'
import {useCallback, useMemo} from 'react'
import {useTaskViewContext} from '../context/TaskViewContext'

export default function TaskCard(props: TaskEntity) {
  const {
    task_name,
    log_date,
    task_start,
    task_end,
    task_status_name,
    employee_name,
    team_name,
    task_category_name,
    sub_task_category_name,
    department_name,
    project_name,
  } = props
  const context = useTaskViewContext()

  const statusColor = useMemo(() => {
    switch (task_status_name) {
      case 'Planned':
        return 'bg-blue-500'
      case 'Pending':
        return 'bg-orange-500'
      case 'Completed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-yellow-500'
    }
  }, [task_status_name])

  const onClick = useCallback(() => {
    if (!context) {
      return
    }
    context.setEditTaskModal({
      editTaskModal: {
        show: true,
        initialData: props,
      },
    })
  }, [context, props])

  return (
    <Card
      onClick={onClick}
      className="col-span-3 hover:cursor-pointer hover:shadow-md hover:opacity-75 transition-all md:col-span-1  border-l-4 border-l-blue-800 flex items-center  rounded-md px-[4px] py-[12px] min-h-[120px]">
      <IconGripVertical width={16} height={16} />
      <div className="w-[33%] flex flex-col justify-center items-center gap-2 ml-1 h-[100%] bg-neutral-100 rounded-md p-2">
        <span className="text-[14px] font-bold text-blue-800">
          {format(log_date, 'yyyy MMM, dd')}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[14px] text-neutral-900">
            {format(task_start, 'HH:mm')}
          </span>
          <IconArrowRight width={12} height={12} />
          <span className="text-[14px] text-neutral-900">
            {format(task_end, 'HH:mm')}
          </span>
        </div>
      </div>
      <div className="w-[68%] flex flex-col gap-2 ml-4">
        <span className="text-[14px] leading-4 font-semibold line-clamp-2">
          {task_name}
        </span>

        <div className="flex items-center justify-between  pe-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-[40px] h-[40px] mx-auto shadow-sm ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-blue-800 text-white capitalize text-[12px]">
                {employee_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <span className="text-[12px] max-w-[100px] line-clamp-1 leading-snug">
                {employee_name}
              </span>
              <span className="text-[10px] text-neutral-500 max-w-[100px] leading-snug line-clamp-1">
                @ {team_name}
              </span>
              <span className="text-[10px] text-neutral-500 leading-snug line-clamp-1">
                {department_name}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pe-3">
          <div className="flex flex-col  pe-3">
            <span className="text-[10px] line-clamp-1 leading-snug  text-blue-500">
              (Project - {project_name})
            </span>
            <span className="text-blue-500 line-clamp-1 leading-snug text-[10px]">
              #{task_category_name}
            </span>
            <span className="text-blue-500 line-clamp-1 leading-snug text-[10px]">
              #{sub_task_category_name}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Badge
              className={cn(
                statusColor,
                `hover:${statusColor} hover:opacity-85`
              )}>
              <span className="text-[12px] line-clamp-1">
                {task_status_name}
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}
