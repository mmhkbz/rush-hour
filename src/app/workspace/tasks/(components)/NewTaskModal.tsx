'use client'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  selectShowNewTaskModal,
  setShowNewTaskModalAction,
  useAppState,
} from '@/store'
import {IconFile} from '@tabler/icons-react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {useCreateTask} from '../hooks/useCreateTask'
import {Button} from '@/components/ui/button'
import TaskCategoryListSelect from '@/components/select/TaskCategoryListSelect'
import SubTaskCategoryListSelect from '@/components/select/SubTaskCategoryListSelect'
import {TaskLevelSelect, TaskStatusSelect} from '@/components/select'
import ProjectListSelect from '@/components/select/ProjectListSelect'
import DepartmentListSelect from '@/components/select/DepartmentListSelect'
import {Textarea} from '@/components/ui/textarea'

// employee_id: string
//   employee_name: string
//   task_name: string
//   remark: string
//   task_category_id: string
//   task_category_name: string
//   sub_task_category_id: string
//   sub_task_category_name: string
//   task_start: Date
//   task_end: Date
//   task_status_id: string
//   task_status_name: string
//   task_level_id: string
//   task_level_name: string
//   project_id: string
//   project_name: string
//   team_id: string
//   team_name: string
//   department_id: string
//   department_name: string

export function NewTaskModal() {
  const showModal = useAppState(selectShowNewTaskModal)
  const dispatchShowModal = useAppState(setShowNewTaskModalAction)
  const {form, isPending, handleCreate} = useCreateTask()
  const {setValue} = form

  console.log(form.formState.errors)

  return (
    <AlertDialog open={showModal} onOpenChange={dispatchShowModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1">
            <IconFile width={24} height={24} />
            New Task
          </AlertDialogTitle>
          <AlertDialogDescription>
            Remember to fill your daily tasks!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={handleCreate}>
            <FormField
              name="task_name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task name" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Remark: If you filled task name only, it will automatically
                    assume as today and status as progress. Please make sure to
                    fill detail.
                  </FormDescription>
                </FormItem>
              )}
            />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Continue for detail</AccordionTrigger>
                <AccordionContent className="max-h-[300px] overflow-scroll p-1">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <AlertDialogFooter className="mt-3">
              <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Loading...' : 'Continue'}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
