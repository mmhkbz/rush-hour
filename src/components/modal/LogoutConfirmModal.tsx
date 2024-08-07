'use client'

import {
  selectShowLogoutConfirmModal,
  setShowLogoutConfirmModalAction,
  useAppState,
} from '@/store'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'
import {useLogout} from '@/hooks'
import {Button} from '../ui/button'

export function LogoutConfirmModal() {
  const showLogoutConfirmModal = useAppState(selectShowLogoutConfirmModal)
  const dispatchShowLogoutConfirm = useAppState(setShowLogoutConfirmModalAction)
  const {handleLogout, isPending} = useLogout()
  return (
    <AlertDialog
      open={showLogoutConfirmModal}
      onOpenChange={dispatchShowLogoutConfirm}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure to logout from application?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-8">No</AlertDialogCancel>
          <Button
            disabled={isPending}
            onClick={async () => {
              await handleLogout()
              dispatchShowLogoutConfirm(false)
            }}
            className="px-8 bg-blue-800">
            {isPending ? 'Loading...' : 'Yes'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
