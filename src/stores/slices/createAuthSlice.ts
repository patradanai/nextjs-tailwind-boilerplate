import { StateCreator } from 'zustand'

export interface IAuthSlice {
    isLoading: boolean
    isError: boolean
    login: () => void
}

export const createAuthStore: StateCreator<IAuthSlice, [], []> = (set) => ({
    isLoading: false,
    isError: false,
    login: () => set(() => ({})),
})
