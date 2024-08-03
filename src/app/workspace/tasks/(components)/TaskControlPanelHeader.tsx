'use client'
import {Label} from '@/components/ui/label'
import {Switch} from '@/components/ui/switch'
import {selectTasksView, setTasksViewAction, useAppState} from '@/store'
import {IconSquare, IconTable} from '@tabler/icons-react'
import TaskStatusSelect from './TaskStatusSelect'
import FilterByProjectSelect from './FilterByProjectSelect'
import FilterByBusinessFunctionSelect from './FilterByBusinessFunctionSelect'
import FilterByComplexitySelect from './FilterByComplexifySelect'

export default function TaskControlPanelHeader() {
  const taskViewType = useAppState(selectTasksView)
  const dispatchSetTaskView = useAppState(setTasksViewAction)
  return (
    <div className="w-[100%] py-5 flex pe-5 gap-5 flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-2 justify-start ">
        <TaskStatusSelect />
        <FilterByProjectSelect />
        <FilterByBusinessFunctionSelect />
        <FilterByComplexitySelect />
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="display-mode" className="flex gap-1 items-center">
          <IconSquare width={16} height={16} />
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
    </div>
  )
}
