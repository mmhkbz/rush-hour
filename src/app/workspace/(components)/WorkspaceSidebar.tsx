'use client'
import Image from 'next/image'
import {HeartIcon} from '@radix-ui/react-icons'
import WorkspaceNavLinkList from './WorkspaceNavLinkList'

export default function WorkspaceSidebar() {
  return (
    <section className="w-[18%] xl:w-[13%] fixed left-0 hidden md:block border-r  z-10 h-[100%] shadow-sm max-w-[18%] max-h-[100%] bg-white">
      <div
        id="brand-region"
        className="p-3 flex gap-2 justify-center items-center">
        <Image src="/icons/brand.png" alt="brand-icon" width={32} height={32} />
        <h3 className="text-blue-800 text-[16px]">Rush Hour</h3>
      </div>
      <nav className="p-3 mt-[12px]">
        <WorkspaceNavLinkList />
      </nav>
      <p className="mt-2 mx-auto absolute bottom-3 left-5 text-[12px] text-neutral-500 flex items-center gap-1">
        Created by Team Hay Mann with <HeartIcon className="text-blue-800" />
      </p>
    </section>
  )
}
