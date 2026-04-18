import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample Data
const sampleOrders = [
  {
    id: "ORD-001",
    date: "19 Apr 2026, 10:30 AM",
    customer: {
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul.s@example.com",
      address: "B-12, Lanka, Near BHU Gate, Varanasi, UP 221005"
    },
    items: [
      { name: "Paracetamol 500mg", qty: 2, price: 30 },
      { name: "Vitamin C Tablets", qty: 1, price: 120 }
    ],
    total: 180,
    status: "Pending"
  },
  {
    id: "ORD-002",
    date: "19 Apr 2026, 11:15 AM",
    customer: {
      name: "Priya Singh",
      phone: "+91 8765432109",
      email: "", // No email provided
      address: "Flat 402, Shivam Apartments, Sigra, Varanasi, UP 221010"
    },
    items: [
      { name: "Cough Syrup 100ml", qty: 1, price: 85 },
      { name: "Vicks Vaporub 50g", qty: 1, price: 150 }
    ],
    total: 235,
    status: "Processing"
  },
  {
    id: "ORD-003",
    date: "18 Apr 2026, 05:45 PM",
    customer: {
      name: "Amit Patel",
      phone: "+91 7654321098",
      email: "amit.p99@gmail.com",
      address: "House 15, Assi Ghat Road, Varanasi, UP 221005"
    },
    items: [
      { name: "Dolo 650", qty: 3, price: 35 },
      { name: "Volini Gel 30g", qty: 1, price: 110 },
      { name: "Band-Aid Pack", qty: 1, price: 50 }
    ],
    total: 265,
    status: "Delivered"
  }
];

export default function Admin() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrder = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-rose-100 text-rose-600 border-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30";
      case "Processing": return "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30";
      case "Delivered": return "bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30";
      default: return "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="pb-10 w-full"
    >
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-800 mb-6 sticky top-0 bg-[var(--bg-color)] z-20 pt-2">
        <div>
          <h2 className="text-2xl font-extrabold flex items-center gap-2">
            👨‍💻 Admin Dashboard
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">Manage all recent orders</p>
        </div>
        <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-bold text-sm">
          {sampleOrders.length} Orders
        </div>
      </div>

      <div className="space-y-4">
        {sampleOrders.map((order, i) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            {/* Minimal Summary Banner (Always Visible) */}
            <div 
              onClick={() => toggleOrder(order.id)}
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  {order.customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">{order.customer.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{order.date}</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5">
                <span className="font-extrabold text-primary">₹{order.total}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
            </div>

            {/* Expanded Detailed View */}
            <AnimatePresence>
              {expandedOrderId === order.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-100 dark:border-slate-700/50 bg-gray-50/30 dark:bg-slate-800/20"
                >
                  <div className="p-4 space-y-5">
                    {/* Contact & Address Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Contact Details</p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium flex items-center gap-2">
                            <span className="text-primary">📞</span> {order.customer.phone}
                          </p>
                          {order.customer.email && (
                            <p className="text-sm font-medium flex items-center gap-2">
                              <span className="text-primary">✉️</span> {order.customer.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Delivery Address</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-primary mt-0.5">📍</span> {order.customer.address}
                        </p>
                      </div>
                    </div>

                    {/* Order Items Table */}
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Medicines Ordered</p>
                      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                        {order.items.map((item, index) => (
                          <div 
                            key={index} 
                            className="flex justify-between items-center p-3 text-sm border-b last:border-b-0 border-gray-100 dark:border-slate-700"
                          >
                            <div className="flex items-center gap-3">
                              <span className="bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-300 w-6 h-6 rounded flex items-center justify-center font-bold text-xs">
                                {item.qty}x
                              </span>
                              <span className="font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                            </div>
                            <span className="font-bold text-gray-600 dark:text-gray-400">₹{item.price * item.qty}</span>
                          </div>
                        ))}
                        <div className="p-3 bg-gray-50 dark:bg-slate-700/50 flex justify-between items-center border-t border-gray-200 dark:border-slate-600">
                          <span className="font-bold text-gray-600 dark:text-gray-300 text-sm">Total Amount</span>
                          <span className="font-extrabold text-primary text-base">₹{order.total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors">
                        Mark as Delivered
                      </button>
                      <button className="flex-1 bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 py-2.5 rounded-xl font-bold text-sm hover:bg-rose-200 dark:hover:bg-rose-500/30 transition-colors">
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}