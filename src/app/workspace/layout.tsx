import {PropsWithChildren} from 'react'
import WorkspaceHeader from './(components)/WorkspaceHeader'

export default function WorkspaceLayout(props: PropsWithChildren) {
  const {children} = props
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen bg-[#f3f3f3] flex flex-col gap-2">
      <WorkspaceHeader />
      <main className="h-[100%] p-3 pt-[80px]">{children}</main>
    </div>
  )
}
