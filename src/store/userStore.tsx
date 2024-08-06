import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

type UserStoreStateType = {
  token?: {
    access_token: string
    refresh_token: string
  }
  info?: {
    employeeId: string
    name: string
    position: string
    profileURL: string
  }
  role?: {
    id: number | string
    name: string
  }
}

type UserStoreActionType = {
  setToken: (payload: Pick<UserStoreStateType, 'token'>) => void
  setInfo: (payload: Pick<UserStoreStateType, 'info'>) => void
  setRole: (payload: Pick<UserStoreStateType, 'role'>) => void
}

export const useUserStore = create<UserStoreStateType & UserStoreActionType>()(
  persist(
    (set) => ({
      setToken: (payload) => set((prev) => ({...prev, token: payload.token})),
      setRole: (payload) => set((prev) => ({...prev, role: payload.role})),
      setInfo: (payload) => set((prev) => ({...prev, info: payload.info})),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const selectToken = (state: UserStoreStateType) => state.token
export const selectInfo = (state: UserStoreStateType) => state.info
export const selectRole = (state: UserStoreStateType) => state.role
export const setTokenAction = (state: UserStoreActionType) => state.setToken
export const setRoleActon = (state: UserStoreActionType) => state.setRole
export const setInfoAction = (state: UserStoreActionType) => state.setInfo
