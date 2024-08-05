import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Metadata} from 'next'
import LoginForm from './(components)/LoginForm'
import LoginBackground from './(components)/LoginBackground'
import {HeartIcon} from '@radix-ui/react-icons'
import * as AES256 from 'aes-everywhere'
import {AES_SECRET} from '@/configs'
import {requestToken} from '@/api/ad-auth'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  console.log(AES_SECRET)
  requestToken()

  // console.log(AES256.encrypt('Mmh28803#009', '258ASEZSKEY'))
  // id 7VNnfW1fLhDHPBsdwdeIhoWqKQnNlact
  // sc 0TUGplNKYSYuJQHA
  return (
    <div className="w-screen relative h-screen flex justify-center items-center p-5">
      <Card className="w-[100%] md:w-[400px] rounded-md border-b-blue-800 border-b-4 py-5">
        <CardHeader>
          <CardTitle className="text-blue-800">Welcome Back!</CardTitle>
          <CardDescription>Log in to access your workspace!</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="flex justify-center">
            <p className="mt-2 mx-auto text-[12px] text-neutral-500 flex items-center gap-1">
              Created by Team Hay Mann with{' '}
              <HeartIcon className="text-blue-800" />
            </p>
          </div>
        </CardContent>
      </Card>
      <LoginBackground />
    </div>
  )
}
