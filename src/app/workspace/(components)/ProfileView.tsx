'use client'
import {Avatar} from '@/components/ui/avatar'
import {Card, CardContent, CardTitle} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import {selectInfo, useUserStore} from '@/store'
import {format} from 'date-fns'
import {useEffect, useState} from 'react'

export default function ProfileView() {
  const [isClient, setIsClient] = useState(false)
  const personalInfo = useUserStore(selectInfo)

  useEffect(() => {
    setIsClient(true)
  }, [setIsClient])

  if (!isClient) {
    return null
  }
  return (
    <Card className="col-span-3 md:col-span-1 ">
      <CardContent className="p-5 flex flex-col gap-3">
        <CardTitle className="tracking-wide bold text-blue-800">
          Profile
        </CardTitle>
        <Avatar className="w-[100px] h-[100px] mx-auto shadow-sm flex items-center justify-center bg-blue-800 text-white text-[32px] ">
          {personalInfo ? personalInfo.name.charAt(0) : 'U'}
        </Avatar>
        <div className="pt-2">
          <ul>
            <li className="flex justify-start">
              <span className="text-[16px] text-blue-800">
                Welcome,{' '}
                {personalInfo ? (
                  personalInfo.name + '!'
                ) : (
                  <span className="animate-pulse">...</span>
                )}
              </span>
            </li>
            <Separator className="my-2" />
            <li className="flex justify-start">
              <span className="text-[16px]">
                Position:{' '}
                {personalInfo ? (
                  personalInfo.position
                ) : (
                  <span className="animate-pulse">...</span>
                )}
              </span>
            </li>
            <Separator className="my-2" />
            <li className="flex justify-start">
              <span className="text-[16px]">
                Today: {format(new Date(), 'd MMM, yyyy (EEE)')}
              </span>
            </li>
            <Separator className="my-2" />
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
