'use client'
import {DataTable} from '@/components/table'
import {useGetTasks} from '../hooks/useGetTasks'
import {ColumnDef} from '@tanstack/react-table'
import {Badge} from '@/components/ui/badge'
import {format} from 'date-fns'
import {Button} from '@/components/ui/button'
import {IconDots} from '@tabler/icons-react'
import {Card} from '@/components/ui/card'

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({row}) => {
      return (
        <Badge className="capitalize flex justify-center max-w-[100px] line-clamp-1">
          {row.original.status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Task',
    cell: ({getValue}) => (
      <span className="max-w-[200px] line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'complexity',
    header: 'Complexity',
    cell: ({getValue}) => (
      <span className="max-w-[200px] line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'staffId',
    header: 'Staff Id',
    cell: ({getValue}) => (
      <span className="max-w-[100px] min-w-[100px] line-clamp-1">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: 'staffName',
    header: 'Staff Name',
    cell: ({getValue}) => (
      <span className="line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({row}) => (
      <span className="line-clamp-1">
        {format(row.original.createdAt, 'd MMM, yyyy')}
      </span>
    ),
  },
  {
    accessorKey: 'fromTime',
    header: 'Start time',
    cell: ({row}) => {
      const value = row.original.toTime
      return (
        <span className="line-clamp-1">
          {value ? format(value, 'hh:mm (a)') : '-'}
        </span>
      )
    },
  },
  {
    accessorKey: 'toTime',
    header: 'End time',
    cell: ({row}) => {
      const value = row.original.toTime
      return (
        <span className="line-clamp-1">
          {value ? format(value, 'hh:mm (a)') : '-'}
        </span>
      )
    },
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <div className="flex justify-center">
          <Button size="sm" className="p-1" variant="outline">
            <IconDots width={16} height={16} />
          </Button>
        </div>
      )
    },
  },
]

export default function TasksTableViewSection() {
  const {data = []} = useGetTasks()

  return (
    <Card className="p-3 rounded-sm">
      <DataTable data={data} columns={columns} />
    </Card>
  )
}
