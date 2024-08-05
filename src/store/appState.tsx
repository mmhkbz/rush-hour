import {create} from 'zustand'

type TaskViewType = 'table' | 'card'

type AppStateType = {
  tasksView: TaskViewType
  pagination: {
    sizePerRequest: number
  }
  showNewTaskModal: boolean
  showLogoutConfirmModal: boolean
}

type AppStateActionType = {
  setTasksView: (value: TaskViewType) => void
  setShowTaskModal: (value: boolean) => void
  setShowLogoutConfirmModal: (value: boolean) => void
}

export const useAppState = create<AppStateType & AppStateActionType>()(
  (set) => ({
    tasksView: 'card',
    pagination: {
      sizePerRequest: 10,
    },
    showNewTaskModal: false,
    setShowTaskModal: (value) =>
      set((prev) => ({...prev, showNewTaskModal: value})),
    setTasksView: (newState) => set((prev) => ({...prev, tasksView: newState})),
    showLogoutConfirmModal: false,
    setShowLogoutConfirmModal: (value) =>
      set((prev) => ({...prev, showLogoutConfirmModal: value})),
  }),
)

export const selectTasksView = (state: AppStateType) => state.tasksView
export const setTasksViewAction = (state: AppStateActionType) =>
  state.setTasksView
export const selectShowNewTaskModal = (state: AppStateType) =>
  state.showNewTaskModal
export const selectShowLogoutConfirmModal = (state: AppStateType) =>
  state.showLogoutConfirmModal
export const setShowNewTaskModalAction = (state: AppStateActionType) =>
  state.setShowTaskModal
export const setShowLogoutConfirmModalAction = (state: AppStateActionType) =>
  state.setShowLogoutConfirmModal
