import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IAuthSlice, createAuthStore } from './slices/createAuthSlice'
// COMPONENT IMPORTS

type StoreState = IAuthSlice

export const useAppStores = create<StoreState>()(
    devtools((...v) => ({
        ...createAuthStore(...v),
        // STORE EXPORTS
    }))
)
