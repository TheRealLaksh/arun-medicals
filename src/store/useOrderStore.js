import { create } from "zustand";

export const useOrderStore = create((set) => ({
  // Initial Status
  orderStatus: "Ordered", 
  // Function to update status from Admin panel
  setOrderStatus: (status) => set({ orderStatus: status }),
}));