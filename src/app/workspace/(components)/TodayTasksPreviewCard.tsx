import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
        <div className="w-[100%] py-5">
          <Table className="border rounded-sm">
            <TableCaption>Today tasks list table</TableCaption>
            <TableHeader className="border rounded-sm">
              <TableHead className="border w-[200px] max-w-[200px]">
                Task Name
              </TableHead>
              <TableHead className="border">Status</TableHead>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border">
                  <span className="line-clamp-1">
                    Deploy Some Project on AWS EKS
                  </span>
                </TableCell>
                <TableCell>
                  <span className="line-clamp-1">In Progress</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
