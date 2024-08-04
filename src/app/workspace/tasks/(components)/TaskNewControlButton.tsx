import {Button} from '@/components/ui/button'
import {IconCirclePlus} from '@tabler/icons-react'

export default function TaskNewControlButton() {
  return (
    <Button size="sm" variant="outline" className="flex gap-1">
      <IconCirclePlus width={16} height={16} />
      New
    </Button>
  )
}
