'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {useTaskViewContext} from '../context/TaskViewContext'
import {useEffect} from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useEditTask} from '../hooks/useEditTask'
import {
  DateTimePickerSelect,
  TaskLevelSelect,
  TaskStatusSelect,
} from '@/components/select'
import TaskCategoryListSelect from '@/components/select/TaskCategoryListSelect'
import SubTaskCategoryListSelect from '@/components/select/SubTaskCategoryListSelect'
import ProjectListSelect from '@/components/select/ProjectListSelect'
import DepartmentListSelect from '@/components/select/DepartmentListSelect'
import {Textarea} from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'

export default function TaskEditSheet() {
  const context = useTaskViewContext()
  const {form, handleEdit, isPending} = useEditTask()
  const {setValue} = form

  // data binding to form
  useEffect(() => {
    if (
      !context ||
      !context.editTaskModal ||
      !context.editTaskModal.initialData
    ) {
      return
    }
    Object.entries(context.editTaskModal.initialData).forEach(
      ([key, value]) => {
        if (key === 'task_start' || key === 'task_end') {
          setValue(key as any, new Date(value))
        } else {
          setValue(key as any, value)
        }
      }
    )
  }, [context, setValue])

  return (
    <Sheet
      onOpenChange={(value) =>
        context?.setEditTaskModal({
          editTaskModal: {
            show: value,
          },
        })
      }
      open={
        context && context.editTaskModal ? context.editTaskModal.show : false
      }>
      <SheetContent className="overflow-scroll">
        <SheetHeader>
          <SheetTitle>Task Detail</SheetTitle>
          <SheetDescription>
            Make sure to update your task status!
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={handleEdit} className="flex flex-col gap-3  pt-5">
            <FormField
              name="task_name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="task_start"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Start time</FormLabel>
                  <FormControl>
                    <DateTimePickerSelect
                      value={field.value}
                      onChange={field.onChange}
                      label="Pick start date-time"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="task_end"
              render={({field}) => (
                <FormItem>
                  <FormLabel>End time </FormLabel>
                  <FormControl>
                    <DateTimePickerSelect
                      value={field.value}
                      onChange={field.onChange}
                      label="Pick end date-time"
                      // disabled={
                      //   watchedStartTime
                      //     ? {before: watchedStartTime}
                      //     : undefined
                      // }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="task_status_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task status</FormLabel>
                  <FormControl>
                    <TaskStatusSelect
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('task_status_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="task_category_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task category</FormLabel>
                  <FormControl>
                    <TaskCategoryListSelect
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('task_category_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="sub_task_category_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Sub-task category</FormLabel>
                  <FormControl>
                    <SubTaskCategoryListSelect
                      onValueChange={(value) => {
                        field.onChange(value)
                      }}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('sub_task_category_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="task_level_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task level</FormLabel>
                  <FormControl>
                    <TaskLevelSelect
                      onValueChange={(value) => {
                        field.onChange(value)
                      }}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('task_level_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="project_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Project</FormLabel>
                  <FormControl>
                    <ProjectListSelect
                      onValueChange={(value) => {
                        field.onChange(value)
                      }}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('project_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="department_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <DepartmentListSelect
                      onValueChange={(value) => {
                        field.onChange(value)
                      }}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('department_name', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="remark"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Remark</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Remark" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end items-center gap-3">
              <Button
                disabled={isPending}
                type="button"
                onClick={() =>
                  context?.setEditTaskModal({
                    editTaskModal: {
                      show: false,
                    },
                  })
                }
                variant="outline">
                Close
              </Button>
              <Button disabled={isPending}>
                {isPending ? 'Updating...' : 'Update'}
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
