'use client'
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
import {useLogin} from '../(hooks)/useLogin'

export default function LoginForm() {
  const {form, handleLogin} = useLogin()
  return (
    <Form {...form}>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
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
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Button type="submit" className="w-full bg-blue-800">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  )
}
