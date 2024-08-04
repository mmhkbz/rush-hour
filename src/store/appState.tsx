import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

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
  persist(
    (set) => ({
      tasksView: 'card',
      pagination: {
        sizePerRequest: 10,
      },
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
