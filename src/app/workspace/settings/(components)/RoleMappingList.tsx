'use client'
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
import {useGetRoleList} from '../(hooks)/useGetRoleList'
import {useEffect} from 'react'
import {useToast} from '@/components/ui/use-toast'
import {cn} from '@/libs/utils'

export default function RoleMappingList() {
  const {data: roles, isPending, error} = useGetRoleList()
  const {toast} = useToast()

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to get role mappings!',
        variant: 'destructive',
      })
    }
  }, [error, toast])

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
            <TableHead className="border">Team Name</TableHead>
            <TableHead className="border">Role</TableHead>
            <TableHead className="border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!roles && !isPending && (
            <TableRow>
              <TableCell colSpan={3}>
                <h6 className="text-neutral-500 text-center">
                  No Records to Display
                </h6>
              </TableCell>
            </TableRow>
          )}
          {roles &&
            (roles as RoleMapping[]).map((role) => (
              <TableRow key={role.Id}>
                <TableCell className="border">{role.StaffID}</TableCell>
                <TableCell className="border">{role.TeamName || '-'}</TableCell>
                <TableCell className="border">
                  <Badge
                    className={cn({
                      'bg-red-800': role.RoleType === 1,
                      'bg-blue-800': role.RoleType === 2,
                    })}>
                    {role.RoleType === 1 ? 'Admin' : 'User'}
                  </Badge>
                </TableCell>
                <TableCell className="flex justify-center items-center">
                  <Button size="sm" variant="outline">
                    <IconTrash width={16} height={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
