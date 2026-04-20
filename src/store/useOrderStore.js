import { create } from "zustand";

const initialOrders = [
  {
    id: "ORD-001",
    date: "19 Apr 2026, 10:30 AM",
    customer: { name: "Rahul Sharma", phone: "+91 9876543210", email: "rahul.s@example.com", address: "B-12, Lanka, Near BHU Gate, Varanasi, UP 221005" },
    items: [{ name: "Paracetamol 500mg", qty: 2, price: 30 }, { name: "Vitamin C Tablets", qty: 1, price: 120 }],
    total: 180,
    status: "Ordered"
  },
  {
    id: "ORD-002",
    date: "19 Apr 2026, 11:15 AM",
    customer: { name: "Priya Singh", phone: "+91 8765432109", email: "", address: "Flat 402, Shivam Apartments, Sigra, Varanasi, UP 221010" },
    items: [{ name: "Cough Syrup 100ml", qty: 1, price: 85 }, { name: "Vicks Vaporub 50g", qty: 1, price: 150 }],
    total: 235,
    status: "Packed"
  },
  {
    id: "ORD-003",
    date: "18 Apr 2026, 05:45 PM",
    customer: { name: "Amit Patel", phone: "+91 7654321098", email: "amit.p99@gmail.com", address: "House 15, Assi Ghat Road, Varanasi, UP 221005" },
    items: [{ name: "Dolo 650", qty: 3, price: 35 }, { name: "Volini Gel 30g", qty: 1, price: 110 }, { name: "Band-Aid Pack", qty: 1, price: 50 }],
    total: 265,
    status: "Delivered"
  },
  {
    id: "ORD-004",
    date: "18 Apr 2026, 08:20 PM",
    customer: { name: "Sneha Reddy", phone: "+91 9123456780", email: "sneha.r@outlook.com", address: "Villa 3, Cantonment Area, Varanasi, UP 221002" },
    items: [{ name: "Eno Regular", qty: 5, price: 10 }, { name: "Digene Gel", qty: 1, price: 140 }],
    total: 190,
    status: "Dispatched"
  },
  {
    id: "ORD-005",
    date: "19 Apr 2026, 09:00 AM",
    customer: { name: "Vikas Kumar", phone: "+91 6309876543", email: "", address: "Room 45, Hostel C, BHU Campus, Varanasi, UP 221005" },
    items: [{ name: "Moov Spray 50g", qty: 1, price: 199 }],
    total: 199,
    status: "Ordered"
  }
];

export const useOrderStore = create((set) => ({
  orders: initialOrders,
  activeOrderId: null, // Required to stop the crash

  updateOrderStatus: (id, newStatus) => set((state) => ({
    orders: state.orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    )
  })),

  // These functions are required by the Success page
  setActiveOrderId: (id) => set({ activeOrderId: id }),
  clearActiveOrder: () => set({ activeOrderId: null }),
}));