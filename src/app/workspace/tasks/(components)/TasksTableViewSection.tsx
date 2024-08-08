'use client'
import {DataTable} from '@/components/table'
import {CellContext, ColumnDef} from '@tanstack/react-table'
import {Badge} from '@/components/ui/badge'
import {format} from 'date-fns'
import {Button} from '@/components/ui/button'
import {IconDots} from '@tabler/icons-react'
import {Card} from '@/components/ui/card'
import {useTaskViewContext} from '../context/TaskViewContext'
import {FC, memo} from 'react'

const TableAction: FC<CellContext<TaskEntity, unknown>> = memo(({row}) => {
  const context = useTaskViewContext()
  return (
    <div className="flex justify-center">
      <Button
        onClick={() => {
          context?.setEditTaskModal({
            editTaskModal: {
              show: true,
              initialData: {
                ...row.original,
              },
            },
          })
        }}
        size="sm"
        className="p-1"
        variant="outline">
        <IconDots width={16} height={16} />
      </Button>
    </div>
  )
})

TableAction.displayName = 'TableAction'

const columns: ColumnDef<TaskEntity>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({row}) => {
      return <Badge>{row.original.task_status_name}</Badge>
    },
  },
  {
    accessorKey: 'task_name',
    header: 'Task',
    cell: ({getValue}) => (
      <span className="max-w-[200px] line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'task_level_name',
    header: 'Complexity',
    cell: ({getValue}) => (
      <span className="max-w-[200px] line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'employee_id',
    header: 'Employee Id',
    cell: ({getValue}) => (
      <span className="max-w-[100px] min-w-[100px] line-clamp-1">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: 'employee_name',
    header: 'Employee Name',
    cell: ({getValue}) => (
      <span className="line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'team_name',
    header: 'Team Name',
    cell: ({getValue}) => (
      <span className="max-w-[100px] min-w-[100px] line-clamp-1">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: 'project_name',
    header: 'Project Name',
    cell: ({getValue}) => (
      <span className="line-clamp-1">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: 'log_date',
    header: 'Date',
    cell: ({row}) => (
      <span className="line-clamp-1">
        {format(row.original.log_date, 'd MMM, yyyy')}
      </span>
    ),
  },
  {
    accessorKey: 'task_start',
    header: 'Start time',
    cell: ({row}) => {
      const value = row.original.task_start
      return (
        <span className="line-clamp-1">
          {value ? format(value, 'hh:mm (a)') : '-'}
        </span>
      )
    },
  },
  {
    accessorKey: 'task_end',
    header: 'End time',
    cell: ({row}) => {
      const value = row.original.task_end
      return (
        <span className="line-clamp-1">
          {value ? format(value, 'hh:mm (a)') : '-'}
        </span>
      )
    },
  },
  {
    header: 'Action',
    cell: TableAction,
  },
]

type TasksTableViewSectionProps = {
  tasks: TaskEntity[]
  isPending: boolean
}

export default function TasksTableViewSection(
  props: TasksTableViewSectionProps
) {
  const {tasks, isPending} = props

  return (
    <Card className="p-3 rounded-sm">
      <DataTable data={tasks} columns={columns} isPending={isPending} />
    </Card>
  )
}
