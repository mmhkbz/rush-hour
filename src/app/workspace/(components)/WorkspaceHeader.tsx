'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {IconMenu2} from '@tabler/icons-react'
import Image from 'next/image'
import WorkspaceNavLinkList from './WorkspaceNavLinkList'
import {HeartIcon} from '@radix-ui/react-icons'
import {useDisclosure} from '@mantine/hooks'
import {useEffect, useState} from 'react'

const Brand = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/icons/brand.png" alt="brand-icon" width={40} height={40} />
      <h6 className="text-[16px] text-blue-800">Rush Hour</h6>
    </div>
  )
}

export default function WorkspaceHeader() {
  const [opened, {open, close}] = useDisclosure()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <header
      id="workspace-header"
      className="md:hidden  w-[100%] h-[10%] fixed top-0 z-20 bg-white shadow-sm p-5 px-8 flex  justify-between items-center">
      <Brand />
      <Sheet
        open={opened}
        onOpenChange={(isOpen) => (isOpen ? open() : close())}>
        <SheetTrigger>
          <IconMenu2 width={32} height={32} />
        </SheetTrigger>
        <SheetContent side="left" className="p-5">
          <SheetHeader>
            <SheetTitle>
              <Brand />
            </SheetTitle>
          </SheetHeader>
          <SheetDescription>Have a nice day!</SheetDescription>
          <div className="py-10">
            <WorkspaceNavLinkList onAfterClick={close} />
          </div>
          <p className="mt-2 mx-auto absolute bottom-3 left-5 text-[12px] text-neutral-500 flex items-center gap-1">
            Created by Team Hay Mann with{' '}
            <HeartIcon className="text-blue-800" />
          </p>
        </SheetContent>
      </Sheet>
    </header>
  )
}
