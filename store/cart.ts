import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CartState {
  cart: string[]
  add: (product: string) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  add: (product: string) => set((state) => ({ cart: [...state.cart, product] })),
}))
