import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Card} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import {format} from 'date-fns'

export default function ProfileView() {
  return (
    <Card className="w-[100%] md:w-[300px] flex flex-col items-center py-[32px] gap-3 ">
      <Avatar className="w-[100px] h-[100px] shadow-sm ">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-blue-800 text-white text-[32px]">
          CN
        </AvatarFallback>
      </Avatar>
      <div className="pt-2">
        <ul>
          <li className="flex justify-start">
            <span className="text-[16px] text-blue-800">Welcome, Lionel!</span>
          </li>
          <Separator className="my-2" />
          <li className="flex justify-start">
            <span className="text-[16px] text-blue-800">
              Position: Supervisor
            </span>
          </li>
          <Separator className="my-2" />
          <li className="flex justify-start">
            <span className="text-[16px] text-blue-800">
              Today is {format(new Date(), 'yyyy MMM d (EEE)')}
            </span>
          </li>
          <Separator className="my-2" />
        </ul>
      </div>
    </Card>
  )
}
