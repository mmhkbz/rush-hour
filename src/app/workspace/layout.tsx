import {PropsWithChildren} from 'react'
import WorkspaceSidebar from './(components)/WorkspaceSidebar'
import WorkspaceHeader from './(components)/WorkspaceHeader'

export default function WorkspaceLayout(props: PropsWithChildren) {
  const {children} = props
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen bg-neutral-100 md:flex gap-2">
      <WorkspaceSidebar />
      {/* for mobile */}
      <WorkspaceHeader />
      <main className="w-[100%] md:mt-[0] mt-[64px] md:w-[82%] max-w-[100%] md:max-h-[100%] max-h-[90%]  md:max-w-[82%] h-[100%] p-3 pt-[32px]">
        {children}
      </main>
    </div>
  )
}
