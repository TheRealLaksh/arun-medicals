import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => set((state) => {
        const existing = state.cart.find(i => i.id === item.id);
        if (existing) {
          return { cart: state.cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) };
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        cart: quantity > 0 
          ? state.cart.map((item) => item.id === id ? { ...item, quantity } : item)
          : state.cart.filter((item) => item.id !== id)
      })),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: "arun-medicals-cart",
    }
  )
);