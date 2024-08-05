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

export function LogoutConfirmModal() {
  const showLogoutConfirmModal = useAppState(selectShowLogoutConfirmModal)
  const dispatchShowLogoutConfirm = useAppState(setShowLogoutConfirmModalAction)
  const logout = useLogout()
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
          <AlertDialogAction onClick={logout} className="px-8 bg-blue-800">
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
