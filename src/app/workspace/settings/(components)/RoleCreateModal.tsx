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
import RoleSelectInput from '../../(components)/RoleSelectInput'
import TeamSelect from '@/components/select/TeamSelect'
import {useCreateRoleMap} from '../(hooks)/useCreateRoleMap'
import {useQueryClient} from '@tanstack/react-query'
import {QUERY_KEYS} from '@/configs'

export default function RoleCreateModal() {
  const [showRoleModal, setShowRoleModal] = useState(false)
  const queryClient = useQueryClient()
  const {form, handleCreate, isPending} = useCreateRoleMap(() => {
    setShowRoleModal(false)
    queryClient.invalidateQueries({
      queryKey: QUERY_KEYS.ROLE_LIST,
    })
  })
  return (
    <AlertDialog open={showRoleModal} onOpenChange={setShowRoleModal}>
      <Button
        className="flex gap-2 items-center"
        onClick={() => setShowRoleModal(true)}>
        <IconCirclePlus width={16} height={16} />
        Role Map
      </Button>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New Role Mapping</AlertDialogTitle>
          <AlertDialogDescription>
            Make mapping Employee Id and Role for Access Control!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={handleCreate} className="flex flex-col gap-3">
            <FormField
              name="staffId"
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
              name="roleType"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <RoleSelectInput
                      onSelect={(value) => field.onChange(Number(value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="teamId"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Team</FormLabel>
                  <FormControl>
                    <TeamSelect onSelect={(value) => field.onChange(value)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel className="px-8">Cancel</AlertDialogCancel>
              <Button
                type="submit"
                disabled={isPending}
                className="px-8 bg-blue-800">
                {isPending ? 'Loading...' : 'Continue'}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
