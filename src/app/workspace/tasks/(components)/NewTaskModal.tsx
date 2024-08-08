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
  selectInfo,
  selectRole,
  selectShowNewTaskModal,
  setShowNewTaskModalAction,
  useAppState,
  useUserStore,
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
import {
  DateTimePickerSelect,
  TaskLevelSelect,
  TaskStatusSelect,
} from '@/components/select'
import ProjectListSelect from '@/components/select/ProjectListSelect'
import DepartmentListSelect from '@/components/select/DepartmentListSelect'
import {Textarea} from '@/components/ui/textarea'
import {useQueryClient} from '@tanstack/react-query'
import {QUERY_KEYS} from '@/configs'

// TODO : refactor and split into smaller components
export function NewTaskModal() {
  const showModal = useAppState(selectShowNewTaskModal)
  const dispatchShowModal = useAppState(setShowNewTaskModalAction)
  const userInfo = useUserStore(selectInfo)
  const queryClient = useQueryClient()
  const roleInfo = useUserStore(selectRole)
  const {form, isPending, handleCreate} = useCreateTask(() => {
    dispatchShowModal(false)
    form.reset()
    if (roleInfo?.isAdmin) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TASKS_BY_TEAM({
          date: new Date().toDateString(),
          team_id: userInfo ? userInfo.teamId || '' : '',
          task_level_id: '',
          task_status_id: '',
          search_item: '',
        }),
      })
    } else {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TASKS_BY_EMPLOYEE({
          date: '',
          employee_id: userInfo ? userInfo.employeeId : '',
          task_level_id: '',
          task_status_id: '',
        }),
      })
    }
  })
  const {setValue, watch} = form
  const watchedStartTime = watch('task_start') // for binding in end time's disabled status
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
                <AccordionContent className="max-h-[300px] gap-2 overflow-scroll p-1">
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
                            disabled={
                              watchedStartTime
                                ? {before: watchedStartTime}
                                : undefined
                            }
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
