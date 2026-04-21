import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => set((state) => {
        // Create a unique ID for the cart item combining product ID and variant ID
        const uniqueCartId = item.selectedVariant 
          ? `${item.id}-${item.selectedVariant.variantId}` 
          : `${item.id}`;

        const existing = state.cart.find(i => i.cartItemId === uniqueCartId);
        
        if (existing) {
          return { 
            cart: state.cart.map(i => 
              i.cartItemId === uniqueCartId ? { ...i, quantity: i.quantity + 1 } : i
            ) 
          };
        }
        return { 
          cart: [...state.cart, { ...item, cartItemId: uniqueCartId, quantity: 1 }] 
        };
      }),
      removeFromCart: (cartItemId) => set((state) => ({
        cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
      })),
      updateQuantity: (cartItemId, quantity) => set((state) => ({
        cart: quantity > 0 
          ? state.cart.map((item) => item.cartItemId === cartItemId ? { ...item, quantity } : item)
          : state.cart.filter((item) => item.cartItemId !== cartItemId)
      })),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: "arun-medicals-cart",
    }
  )
);