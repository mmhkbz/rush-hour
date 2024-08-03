'use client'
import {IconHome, IconList, IconLogout, IconSettings} from '@tabler/icons-react'
import WorkspaceNavLink from './WorkspaceNavLink'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

const MENUS = [
  {
    label: 'Home',
    icon: IconHome,
    href: '/workspace',
  },
  {
    label: 'Tasks',
    icon: IconList,
    href: '/workspace/tasks',
  },
  {
    label: 'Settings',
    icon: IconSettings,
    href: '/workspace/settings',
  },
]

type Props = {
  onAfterClick?: VoidFunction
}

export default function WorkspaceNavLinkList({onAfterClick}: Props) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return
  }

  return (
    <ul className="flex flex-col ">
      {MENUS.map((menu) => {
        return (
          <WorkspaceNavLink
            key={menu.href}
            isActive={menu.href === pathname}
            {...menu}
            Icon={menu.icon}
            onAfterClick={onAfterClick}
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
  )
}
