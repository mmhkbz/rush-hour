import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {IconTrash} from '@tabler/icons-react'

export default function RoleMappingList() {
  return (
    <div className="py-5">
      <h6 className="text-[14px] text-blue-800">Role Mapping List</h6>
      <div className="py-3">
        <Input
          type="search"
          className="w-[200px]"
          placeholder="Filter by employee id"
        />
      </div>
      <Table className="w-[100%] border md:w-[350px]">
        <TableHeader>
          <TableRow>
            <TableHead className="border">Employee Id</TableHead>
            <TableHead className="border">Role</TableHead>
            <TableHead className="border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border">0123456</TableCell>
            <TableCell className="border">
              <Badge className="bg-red-800">Admin</Badge>
            </TableCell>
            <TableCell className="flex justify-center items-center">
              <Button size="sm" variant="outline">
                <IconTrash width={16} height={16} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border">0123456</TableCell>
            <TableCell className="border">
              <Badge className="bg-blue-800">User</Badge>
            </TableCell>
            <TableCell className="flex justify-center items-center">
              <Button size="sm" variant="outline">
                <IconTrash width={16} height={16} />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
