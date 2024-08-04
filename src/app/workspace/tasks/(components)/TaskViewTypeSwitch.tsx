'use client'

import {Label} from '@/components/ui/label'
import {Switch} from '@/components/ui/switch'
import {selectTasksView, setTasksViewAction, useAppState} from '@/store'
import {IconListTree, IconTable} from '@tabler/icons-react'

export default function TaskViewTypeSwitch() {
  const taskViewType = useAppState(selectTasksView)
  const dispatchSetTaskView = useAppState(setTasksViewAction)
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="display-mode" className="flex gap-1 items-center">
        <IconListTree width={16} height={16} />
        Card
      </Label>
      <Switch
        checked={taskViewType === 'table'}
        id="display-mode"
        className="bg-blue-800"
        onCheckedChange={(checked) =>
          dispatchSetTaskView(checked ? 'table' : 'card')
        }
      />
      <Label htmlFor="display-mode" className="flex gap-1 items-center">
        <IconTable width={16} height={16} />
        Table
      </Label>
    </div>
  )
}
