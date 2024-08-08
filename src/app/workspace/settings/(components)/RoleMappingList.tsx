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
import {IconEdit, IconTrash} from '@tabler/icons-react'
import {useGetRoleList} from '../(hooks)/useGetRoleList'
import {useEffect, useMemo, useState} from 'react'
import {useToast} from '@/components/ui/use-toast'
import {cn} from '@/libs/utils'
import DeleteRoleMapConfirmModal from './DeleteRoleMapConfirmModal'
import RoleCreateModal from './RoleCreateModal'
import {useDeleteRoleMap} from '../(hooks)/useDeleteRoleMap'
import {selectInfo, selectRole, useUserStore} from '@/store'
import EditRoleMapModal from './EditRoleMapModal'
import {Role} from '@/configs'

export default function RoleMappingList() {
  const {data: roles, isPending, error} = useGetRoleList()
  const {toast} = useToast()
  const [deleteModalState, setDeleteModalState] = useState<{
    show: boolean
    id?: number
    staffId?: string
  }>({
    show: false,
  })
  const {mutateAsync: deleteRoleMap, isPending: isDeleting} = useDeleteRoleMap(
    () => {
      setDeleteModalState({
        show: false,
      })
    }
  )
  const accountInfo = useUserStore(selectInfo)
  const roleInfo = useUserStore(selectRole)
  const isReadOnly = useMemo(() => {
    return !roleInfo || roleInfo.id !== Role.ADMIN
  }, [roleInfo])
  const [editModalState, setEditModalState] = useState<{
    show: boolean
    initialData?: {
      id: number
      teamId: string
      roleId: number
      employeeId: string
      teamName: string
    }
  }>({
    show: false,
  })

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
    <div className="py-3">
      <div className="w-[100%] py-3 flex justify-between items-center">
        <Input
          type="search"
          className="w-[200px]"
          placeholder="Filter by employee id"
        />
        {!isReadOnly && <RoleCreateModal />}
      </div>
      {isReadOnly && (
        <h6 className="text-red-500 text-[12px]">
          You have only read access to this module!
        </h6>
      )}
      <Table
        className={cn('w-[100%] border', {
          'opacity-50': isReadOnly,
        })}>
        <TableHeader>
          <TableRow>
            <TableHead className="border">Employee Id</TableHead>
            <TableHead className="border">Team Name</TableHead>
            <TableHead className="border">Role</TableHead>
            <TableHead className="border text-center">Action</TableHead>
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
                <TableCell className="border">
                  {role.StaffID}{' '}
                  {accountInfo?.employeeId === role.StaffID && (
                    <span className="text-red-500">(YOU)</span>
                  )}
                </TableCell>
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
                <TableCell className="flex gap-3 justify-center items-center">
                  <Button
                    // disabled={isReadOnly}
                    onClick={() => {
                      // unable to edit own account mapping
                      if (
                        accountInfo &&
                        accountInfo?.employeeId === role.StaffID
                      ) {
                        return toast({
                          title: 'Error',
                          description: 'Unauthorized to edit yourselft!',
                          variant: 'destructive',
                        })
                      }
                      setEditModalState({
                        show: true,
                        initialData: {
                          id: role.Id,
                          employeeId: role.StaffID,
                          roleId: role.RoleType,
                          teamId: role.TeamID,
                          teamName: role.TeamName,
                        },
                      })
                    }}
                    variant="outline">
                    <IconEdit width={16} height={16} />
                  </Button>
                  <Button
                    disabled={isReadOnly}
                    onClick={() => {
                      // unable to delete own account mapping
                      if (
                        accountInfo &&
                        accountInfo?.employeeId === role.StaffID
                      ) {
                        return toast({
                          title: 'Error',
                          description: 'Unauthorized to delete!',
                          variant: 'destructive',
                        })
                      }
                      setDeleteModalState({
                        show: true,
                        staffId: role.StaffID,
                        id: role.Id,
                      })
                    }}
                    variant="destructive">
                    <IconTrash width={16} height={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* Delete confirm Modal */}
      <DeleteRoleMapConfirmModal
        closeModal={() => setDeleteModalState({show: false})}
        isPending={isDeleting}
        onContinue={() => deleteRoleMap(deleteModalState.id || 0)}
        showModal={deleteModalState.show}
        staffId={deleteModalState.staffId || ''}
      />
      {/* Edit role map modal */}
      <EditRoleMapModal
        show={editModalState.show}
        initialData={editModalState.initialData}
        updateModal={(status) => setEditModalState({show: status})}
      />
    </div>
  )
}
