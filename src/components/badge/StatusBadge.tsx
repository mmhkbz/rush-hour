import {cn} from '@/libs/utils'
import {Badge} from '../ui/badge'
import {useMemo} from 'react'

type StatusBadgeProps = {
  value: string
}

export default function StatusBadge(props: StatusBadgeProps) {
  const {value} = props

  const statusColor = useMemo(() => {
    switch (value) {
      case 'Planned':
        return 'bg-blue-500'
      case 'Pending':
        return 'bg-orange-500'
      case 'Completed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-yellow-500'
    }
  }, [value])

  return (
    <Badge className={cn(statusColor, `hover:${statusColor} hover:opacity-85`)}>
      <span className="text-[12px] ">{value}</span>
    </Badge>
  )
}
