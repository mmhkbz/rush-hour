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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import RoleSelectInput from '../../(components)/RoleSelectInput'
import {TeamSelect} from '@/components/select'
import {Button} from '@/components/ui/button'
import {useEditRoleMap} from '../(hooks)/useEditRoleMap'
import {useEffect} from 'react'

type EditRoleMapModalProps = {
  show: boolean
  updateModal: (value: boolean) => void
  initialData?: {
    id: number
    employeeId: string
    teamId: string
    roleId: number
    teamName: string
  }
}

export default function EditRoleMapModal(props: EditRoleMapModalProps) {
  const {show, updateModal, initialData} = props
  const {form, handleEdit, isPending} = useEditRoleMap(() => updateModal(false))
  const {setValue} = form

  useEffect(() => {
    if (initialData) {
      setValue('id', initialData.id)
      setValue('roleType', initialData.roleId)
      setValue('staffId', initialData.employeeId)
      setValue('teamId', initialData.teamId)
      setValue('teamName', initialData.teamName)
    }
  }, [initialData, setValue])

  return (
    <AlertDialog onOpenChange={updateModal} open={show}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Role Map</AlertDialogTitle>
          <AlertDialogDescription>
            Please make sure before you proceed!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={handleEdit} className="flex flex-col gap-3">
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
                      value={Number(field.value).toString()}
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
                    <TeamSelect
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                      onAfterChange={(option) => {
                        setValue('teamName', option.label)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => updateModal(false)}
                className="px-8">
                Cancel
              </AlertDialogCancel>
              <Button
                disabled={isPending}
                type="submit"
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
