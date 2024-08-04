import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

type TaskViewType = 'table' | 'card'

type AppStateType = {
  tasksView: TaskViewType
  pagination: {
    sizePerRequest: number
  }
  showNewTaskModal: boolean
}

type AppStateActionType = {
  setTasksView: (value: TaskViewType) => void
  setShowTaskModal: (value: boolean) => void
}

export const useAppState = create<AppStateType & AppStateActionType>()(
  persist(
    (set) => ({
      tasksView: 'card',
      pagination: {
        sizePerRequest: 10,
      },
      showNewTaskModal: false,
      setShowTaskModal: (value) =>
        set((prev) => ({...prev, showNewTaskModal: value})),
      setTasksView: (newState) =>
        set((prev) => ({...prev, tasksView: newState})),
    }),
    {
      name: 'app-state',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export const selectTasksView = (state: AppStateType) => state.tasksView
export const setTasksViewAction = (state: AppStateActionType) =>
  state.setTasksView
export const selectShowNewTaskModal = (state: AppStateType) =>
  state.showNewTaskModal
export const setShowNewTaskModalAction = (state: AppStateActionType) =>
  state.setShowTaskModal
