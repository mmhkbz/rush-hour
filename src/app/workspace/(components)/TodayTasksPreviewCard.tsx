import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {IconChevronRight} from '@tabler/icons-react'
import Link from 'next/link'

export default function TodayTasksPreviewCard() {
  return (
    <Card className="col-span-3 md:col-span-1">
      <CardContent className="p-5">
        <div className="flex justify-between items-center">
          <CardTitle className="tracking-wide bold text-blue-800">
            Today Tasks
          </CardTitle>
          <Link href="/workspace/tasks">
            <Button size="sm" variant="link">
              See More
              <IconChevronRight width={12} height={12} />
            </Button>
          </Link>
        </div>
        <div className="w-[100%]"></div>
      </CardContent>
    </Card>
  )
}
