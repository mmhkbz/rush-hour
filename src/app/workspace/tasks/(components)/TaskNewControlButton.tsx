'use client'
import {Button} from '@/components/ui/button'
import {setShowNewTaskModalAction, useAppState} from '@/store'
import {IconCirclePlus} from '@tabler/icons-react'

export default function TaskNewControlButton() {
  const dispatchSetShowModal = useAppState(setShowNewTaskModalAction)
  return (
    <Button
      onClick={() => dispatchSetShowModal(true)}
      size="sm"
      variant="outline"
      className="flex gap-1">
      <IconCirclePlus width={16} height={16} />
      New
    </Button>
  )
}
