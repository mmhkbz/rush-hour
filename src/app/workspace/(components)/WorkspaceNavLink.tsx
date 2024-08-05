'use client'

import {cn} from '@/libs/utils'
import {Icon, IconProps} from '@tabler/icons-react'
import Link from 'next/link'
import {ForwardRefExoticComponent, RefAttributes} from 'react'

type Props = {
  href?: string
  label: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  isActive?: boolean
  onClick?: VoidFunction
  className?: string
  onAfterClick?: VoidFunction
}

export default function WorkspaceNavLink(props: Props) {
  const {
    href,
    label,
    Icon,
    isActive,
    onClick,
    className = '',
    onAfterClick,
  } = props

  if (!href && isActive === undefined && onClick) {
    return (
      <li
        onClick={() => {
          onClick()
          onAfterClick && onAfterClick()
        }}
        key={label}
        className={cn(
          'hover:cursor-pointer py-3 px-3 transition-colors  rounded-md hover:bg-neutral-200 flex items-center gap-2',
          {
            'bg-neutral-1-0': isActive,
          },
          className,
        )}>
        <Icon
          width={18}
          height={18}
          className={cn({
            'text-blue-800': isActive,
          })}
        />
        <span
          className={cn('text-[14px] font-bold', {
            'text-blue-800': isActive,
            className: true,
          })}>
          {label}
        </span>
      </li>
    )
  }

  return (
    <Link onClick={onAfterClick} key={href} href={href || ''}>
      <li
        key={label}
        className={cn(
          'hover:cursor-pointer py-3 px-3 rounded-md transition-colors hover:bg-neutral-100 flex items-center gap-2',
          {
            'bg-neutral-100': isActive,
          },
        )}>
        <Icon
          width={18}
          height={18}
          className={cn({
            'text-blue-800': isActive,
          })}
        />
        <span
          className={cn('text-[14px] font-bold', {
            'text-blue-800': isActive,
          })}>
          {label}
        </span>
      </li>
    </Link>
  )
}
