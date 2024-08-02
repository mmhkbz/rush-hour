'use client'
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useForm} from 'react-hook-form'

export default function LoginForm() {
  const form = useForm()
  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <FormField
          name="employeeId"
          render={({field}) => (
            <FormItem>
              <FormLabel>Employee Id</FormLabel>
              <FormControl>
                <Input placeholder="Enter Employee Id" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter Your Password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Button className="w-full bg-blue-800">Continue</Button>
        </div>
      </form>
    </Form>
  )
}
