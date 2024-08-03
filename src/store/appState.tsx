import {create} from 'zustand'

type TaskViewType = 'table' | 'card'

type AppStateType = {
  tasksView: TaskViewType
  pagination: {
    sizePerRequest: number
  }
}

type AppStateActionType = {
  setTasksView: (value: TaskViewType) => void
}

export const useAppState = create<AppStateType & AppStateActionType>()(
  (set) => ({
    tasksView: 'card',
    pagination: {
      sizePerRequest: 10,
    },
    setTasksView: (newState) => set((prev) => ({...prev, tasksView: newState})),
  }),
)

export const selectTasksView = (state: AppStateType) => state.tasksView
export const setTasksViewAction = (state: AppStateActionType) =>
  state.setTasksView
