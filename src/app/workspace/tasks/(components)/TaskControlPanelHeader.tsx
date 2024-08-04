import TaskStatusSelect from './TaskStatusSelect'
import FilterByProjectSelect from './FilterByProjectSelect'
import FilterByBusinessFunctionSelect from './FilterByBusinessFunctionSelect'
import FilterByComplexitySelect from './FilterByComplexifySelect'
import FilterByDateSelect from './FilterByDateSelect'
import TaskViewTypeSwitch from './TaskViewTypeSwitch'

export default function TaskControlPanelHeader() {
  return (
    <div className="w-[100%] py-5 flex pe-5 gap-5 flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-2 justify-start ">
        <FilterByDateSelect />
        <TaskStatusSelect />
        <FilterByProjectSelect />
        <FilterByBusinessFunctionSelect />
        <FilterByComplexitySelect />
      </div>
      <TaskViewTypeSwitch />
    </div>
  )
}
