'use client'

import {Card, CardContent, CardTitle} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import WorkspaceNavLink from './WorkspaceNavLink'
import {IconFile, IconList, IconSettings} from '@tabler/icons-react'
import {setShowNewTaskModalAction, useAppState} from '@/store'

export default function ShortcutLinkCard() {
  const dispatchShowCreateNewTaskModal = useAppState(setShowNewTaskModalAction)
  return (
    <Card className="col-span-3 md:col-span-1">
      <CardContent className="p-5">
        <CardTitle className="tracking-wide bold text-blue-800">
          Shortcut Links
        </CardTitle>
        <div className="w-[100%] py-3">
          <WorkspaceNavLink
            label="New Task"
            onClick={() => dispatchShowCreateNewTaskModal(true)}
            Icon={IconFile}
          />
          <Separator className="my-1" />
          <WorkspaceNavLink
            label="Task List"
            Icon={IconList}
            href="/workspace/tasks"
          />
          <Separator className="my-1" />
          <WorkspaceNavLink
            label="Settings"
            Icon={IconSettings}
            href="/workspace/settings"
          />
          <Separator className="my-1" />
        </div>
      </CardContent>
    </Card>
  )
}
