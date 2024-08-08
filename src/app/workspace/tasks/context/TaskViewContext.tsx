'use client'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

type SetEditTaskModalType = (
  payload: Pick<TaskViewContextType, 'editTaskModal'>
) => void

type TaskViewContextType = {
  editTaskModal?: {
    show: boolean
    initialData?: TaskEntity
  }
  setEditTaskModal: SetEditTaskModalType
}

export const TaskViewContext = createContext<TaskViewContextType | null>(
  {} as TaskViewContextType
)
export const useTaskViewContext = () => useContext(TaskViewContext)

export const TaskViewProvider = (props: PropsWithChildren) => {
  const [modalState, setModalState] = useState<
    Pick<TaskViewContextType, 'editTaskModal'>
  >({
    editTaskModal: {
      show: false,
    },
  })

  const setEditTaskModal: SetEditTaskModalType = useCallback(
    (payload) => {
      setModalState({
        editTaskModal: payload.editTaskModal,
      })
    },
    [setModalState]
  )

  const memorizedModalState = useMemo(() => {
    return {
      editTaskModal: modalState.editTaskModal,
      setEditTaskModal,
    }
  }, [modalState, setEditTaskModal])

  return (
    <TaskViewContext.Provider value={memorizedModalState}>
      {props.children}
    </TaskViewContext.Provider>
  )
}
