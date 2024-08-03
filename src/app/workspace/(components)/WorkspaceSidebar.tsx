'use client'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import Image from 'next/image'
import {
  IconFile,
  IconHome,
  IconLogout,
  IconSettings,
  IconSubtask,
} from '@tabler/icons-react'
import WorkspaceNavLink from './WorkspaceNavLink'
import {usePathname} from 'next/navigation'
import {HeartIcon} from '@radix-ui/react-icons'

const MENUS = [
  {
    label: 'Home',
    icon: IconHome,
    href: '/workspace',
  },
  {
    label: 'Tasks',
    icon: IconFile,
    href: '/workspace/tasks',
  },
  {
    label: 'Settings',
    icon: IconSettings,
    href: '/workspace/settings',
  },
]

export default function WorkspaceSidebar() {
  const pathname = usePathname()
  return (
    <section className="w-[18%] relative h-[100%] shadow-sm max-w-[18%] max-h-[100%] bg-white">
      <div
        id="brand-region"
        className="p-3 flex gap-2 border-b-2 border-b-neutral-50 justify-center items-center">
        <Image src="/icons/brand.png" alt="brand-icon" width={32} height={32} />
        <h3 className="text-blue-800 text-[16px]">Rush Hour</h3>
      </div>
      <nav className="p-3 mt-[12px]">
        <ul className="flex flex-col ">
          {MENUS.map((menu) => {
            return (
              <WorkspaceNavLink
                key={menu.href}
                isActive={menu.href === pathname}
                {...menu}
                Icon={menu.icon}
              />
            )
          })}
          <WorkspaceNavLink
            label="Logout"
            onClick={() => alert('logout')}
            Icon={IconLogout}
            className="bg-red-50"
          />
        </ul>
      </nav>
      <p className="mt-2 mx-auto absolute bottom-3 left-5 text-[12px] text-neutral-500 flex items-center gap-1">
        Created by Team Hay Mann with <HeartIcon className="text-blue-800" />
      </p>
    </section>
  )
}
