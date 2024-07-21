import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CartState {
  isShow: boolean
  toogleShow: () => void
}

export const usePopUp = create<CartState>((set) => ({
  isShow: false,
  toogleShow: () => set((state) => ({ isShow: !state.isShow })),
}))
