import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IAuthSlice, createAuthStore } from './slices/createAuthSlice'
// COMPONENT IMPORTS -- DO NOT REMOVE COMMENT!

type StoreState = IAuthSlice 
    // TYPE -- DO NOT REMOVE COMMENT!

export const useAppStores = create<StoreState>()(
    devtools((...v) => ({
        ...createAuthStore(...v),
        // STORE -- DO NOT REMOVE COMMENT!
    }))
)
