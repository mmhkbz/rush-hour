'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {Button} from '@/components/ui/button'
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
} from '../ui/form'
import {useForm} from 'react-hook-form'
import {Input} from '../ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function NewTaskModal() {
  const showModal = useAppState(selectShowNewTaskModal)
  const dispatchShowModal = useAppState(setShowNewTaskModalAction)
  const form = useForm()
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
          <form>
            <FormField
              name="taskName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Task name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task name" {...field} />
                  </FormControl>
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
                <AccordionTrigger>
                  <Button className="w-[100%]" variant="outline" type="button">
                    Continue for detail
                  </Button>
                </AccordionTrigger>
                <AccordionContent className="h-[500px]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </Form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
