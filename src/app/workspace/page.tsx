import {Metadata} from 'next'
import ProfileView from './(components)/ProfileView'

export const metadata: Metadata = {
  title: 'Workspace | Home',
}

export default function SpacePage() {
  return (
    <div className="pt-[32px]">
      <ProfileView />
    </div>
  )
}
