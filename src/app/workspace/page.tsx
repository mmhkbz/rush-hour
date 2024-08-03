import {Metadata} from 'next'
import ProfileView from './(components)/ProfileView'
import ShortcutLinkCard from './(components)/ShortcutLinkCard'
import TodayTasksPreviewCard from './(components)/TodayTasksPreviewCard'

export const metadata: Metadata = {
  title: 'Workspace | Home',
}

export default function SpacePage() {
  return (
    <div className="pt-[24px]">
      <div className="grid grid-cols-3 gap-5 md:gap-3 p-3">
        <ProfileView />
        <TodayTasksPreviewCard />
        <ShortcutLinkCard />
      </div>
    </div>
  )
}
