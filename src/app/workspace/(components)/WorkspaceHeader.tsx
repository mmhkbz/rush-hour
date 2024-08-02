import {Button} from '@/components/ui/button'
import {
  ExitIcon,
  FileIcon,
  GearIcon,
  HomeIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

const MENUS = [
  {
    label: 'Home',
    icon: HomeIcon,
  },
  {
    label: 'Tasks',
    icon: FileIcon,
  },
  {
    label: 'Settings',
    icon: GearIcon,
  },
]

export default function WorkspaceHeader() {
  return (
    <header className="w-full h-[64px] bg-white flex items-center fixed shadow-sm py-2 sm:px-8 md:px-10">
      <section className="hidden w-[100%] sm:flex justify-between items-center">
        <ul className="flex gap-[16px]">
          {MENUS.map((menu) => (
            <li
              key={menu.label}
              className="hover:cursor-pointer py-1 px-3 transition-colors hover:bg-neutral-100 rounded-xl flex items-center gap-2">
              <menu.icon width={16} height={16} />
              <span className="text-[16px]">{menu.label}</span>
            </li>
          ))}
        </ul>
        <Button variant="destructive" className="flex gap-2" size="sm">
          <ExitIcon width={16} height={16} />
          Logout
        </Button>
      </section>
      <section className="flex sm:hidden px-8 w-[100%] items-center justify-between">
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon
            className="hover:bg-neutral-100 rounded-xl text-blue-800"
            width={24}
            height={24}
          />
        </Button>
        <div className="flex items-center gap-2">
          <PersonIcon width={20} height={20} />
          <span className="text-[16px] text-neutral-500">Lionel</span>
        </div>
      </section>
    </header>
  )
}
