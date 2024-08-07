import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {Button} from '@/components/ui/button'

type DeleteRoleMapConfirmModalPropsType = {
  showModal: boolean
  closeModal: VoidFunction
  onContinue: VoidFunction
  isPending: boolean
  staffId: string
}

export default function DeleteRoleMapConfirmModal(
  props: DeleteRoleMapConfirmModalPropsType
) {
  const {showModal, closeModal, onContinue, isPending, staffId} = props
  return (
    <AlertDialog open={showModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure to delete role mapping for Staff Id - {staffId} ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal} className="px-8">
            No
          </AlertDialogCancel>
          <Button onClick={onContinue} className="px-8 bg-blue-800">
            {isPending ? 'Loading...' : 'Yes'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
