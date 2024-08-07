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
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {IconCirclePlus} from '@tabler/icons-react'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import RoleSelectInput from '../../(components)/RoleSelectInput'

export default function RoleCreateModal() {
  const [showRoleModal, setShowRoleModal] = useState(false)
  const form = useForm()
  return (
    <AlertDialog open={showRoleModal} onOpenChange={setShowRoleModal}>
      <Button
        className="flex gap-2 items-center"
        onClick={() => setShowRoleModal(true)}>
        <IconCirclePlus width={16} height={16} />
        Mapping
      </Button>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New Role Mapping</AlertDialogTitle>
          <AlertDialogDescription>
            Make mapping Employee Id and Role for Access Control!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form className="flex flex-col gap-3">
            <FormField
              name="employeeId"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Employee Id</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Employee Id"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="role"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <RoleSelectInput
                      onSelect={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="teamName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Team</FormLabel>
                  <FormControl>
                    <RoleSelectInput
                      onSelect={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-8">Cancel</AlertDialogCancel>
          <Button className="px-8 bg-blue-800">Continue</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
