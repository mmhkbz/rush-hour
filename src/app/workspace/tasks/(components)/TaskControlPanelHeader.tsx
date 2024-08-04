import TaskStatusSelect from './TaskStatusSelect'
import FilterByProjectSelect from './FilterByProjectSelect'
import FilterByBusinessFunctionSelect from './FilterByBusinessFunctionSelect'
import FilterByComplexitySelect from './FilterByComplexifySelect'
import FilterByDateSelect from './FilterByDateSelect'
import TaskViewTypeSwitch from './TaskViewTypeSwitch'
import {Card} from '@/components/ui/card'
import TaskNewControlButton from './TaskNewControlButton'

export default function TaskControlPanelHeader() {
  return (
    <Card className="w-[100%] p-5  mb-3 rounded-sm flex pe-5 gap-8 flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-2 justify-start ">
        <FilterByDateSelect />
        <TaskStatusSelect />
        <FilterByProjectSelect />
        <FilterByBusinessFunctionSelect />
        <FilterByComplexitySelect />
      </div>
      <div className="flex w-[100%] md:w-auto flex-wrap gap-8 items-center justify-between ">
        <TaskViewTypeSwitch />
        <TaskNewControlButton />
      </div>
    </Card>
  )
}
