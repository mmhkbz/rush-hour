import {PropsWithChildren} from 'react'
import WorkspaceSidebar from './(components)/WorkspaceSidebar'

export default function WorkspaceLayout(props: PropsWithChildren) {
  const {children} = props
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen bg-neutral-100 flex  gap-2">
      <WorkspaceSidebar />
      <main className="w-[82%] max-w-[82%] h-[100%] p-3 pt-[80px]">
        {children}
      </main>
    </div>
  )
}
