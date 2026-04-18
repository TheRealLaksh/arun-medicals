import { create } from "zustand";

export const useCheckoutStore = create((set) => ({
  deliveryMethod: "home",
  paymentMethod: "online",
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
}));