import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Badge} from '@/components/ui/badge'
import {Card} from '@/components/ui/card'
import {cn} from '@/libs/utils'
import {IconArrowRight, IconGripVertical} from '@tabler/icons-react'
import {format} from 'date-fns'
import {useMemo} from 'react'

type TaskCardPropsType = {
  id: string
  name: string
  timestamp: Date
  timeFrom: Date
  timeTo: Date
  status: 'completed' | 'in-progress' | 'planned' | 'pending'
  userId: string
  username: string
}

export default function TaskCard(props: TaskCardPropsType) {
  const {name, timestamp, timeFrom, timeTo, status, username} = props

  const statusColor = useMemo(() => {
    switch (status) {
      case 'planned':
        return 'bg-blue-500'
      case 'in-progress':
        return 'bg-orange-500'
      case 'completed':
        return 'bg-green-500'
      case 'pending':
        return 'bg-yellow-500'
    }
  }, [status])

  return (
    <Card className="col-span-3 hover:cursor-pointer hover:shadow-md hover:opacity-85 transition-all md:col-span-1  border-l-4 border-l-blue-800 flex items-center  rounded-md px-[4px] py-[8px] min-h-[90px]">
      <IconGripVertical width={16} height={16} />
      <div className="w-[30%] flex flex-col justify-center items-center gap-2 ml-1 h-[100%] bg-neutral-100 rounded-md p-2">
        <span className="text-[14px] font-bold text-blue-800">
          {format(timestamp, 'yyyy MMM, dd')}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[14px] text-neutral-900">
            {format(timeFrom, 'HH:mm')}
          </span>
          <IconArrowRight width={12} height={12} />
          <span className="text-[14px] text-neutral-900">
            {format(timeTo, 'HH:mm')}
          </span>
        </div>
      </div>
      <div className="w-[68%] flex flex-col gap-2 ml-4">
        <span className="text-[14px] leading-4 font-semibold line-clamp-2">
          {name}
        </span>
        <div className="flex items-center justify-between gap-2 pe-3">
          <div className="flex items-center gap-1">
            <Avatar className="w-[24px] h-[24px] mx-auto shadow-sm ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-blue-800 text-white capitalize text-[12px]">
                {username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-[12px] max-w-[80px] line-clamp-1">
              {username}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Badge
              className={cn(
                statusColor,
                `hover:${statusColor} hover:opacity-85`,
              )}>
              <span className="text-[12px] line-clamp-1">{status}</span>
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}
