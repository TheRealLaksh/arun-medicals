import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOrderStore } from "../store/useOrderStore";

export default function Admin() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const { orders, updateOrderStatus } = useOrderStore(); 

  const toggleOrder = (id) => setExpandedOrderId(expandedOrderId === id ? null : id);
  const steps = ["Ordered", "Packed", "Dispatched", "Delivered"];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ordered": return "bg-rose-100 text-rose-600 border-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30";
      case "Packed": return "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30";
      case "Dispatched": return "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30";
      case "Delivered": return "bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30";
      default: return "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
    }
  };

  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingDeliveries = orders.filter(o => o.status !== "Delivered").length;

  // ACTUAL PRINTABLE INVOICE GENERATOR
  const handleGenerateInvoice = (order) => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
      <html>
        <head>
          <title>Invoice - ${order.id}</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; max-width: 800px; margin: 0 auto; }
            .header { text-align: center; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 30px; }
            .store-name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 5px; }
            .meta { color: #666; font-size: 14px; }
            .row { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .box { background: #f8fafc; padding: 15px; border-radius: 8px; width: 45%; border: 1px solid #e2e8f0; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .table th, .table td { border-bottom: 1px solid #e2e8f0; padding: 12px; text-align: left; }
            .table th { background-color: #f1f5f9; font-weight: bold; }
            .total-row { font-size: 20px; font-weight: bold; text-align: right; margin-top: 20px; }
            .footer { text-align: center; margin-top: 50px; font-size: 14px; color: #94a3b8; border-top: 1px solid #eee; padding-top: 20px; }
            @media print { body { padding: 0; } .print-btn { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="store-name">Arun Medicals</div>
            <div class="meta">GSTIN: 09AAACA1234A1Z5 | Phone: +91 9988776655</div>
            <div class="meta">Lanka Road, Varanasi, UP 221005</div>
            <h2 style="margin-top:20px; color:#1e293b;">TAX INVOICE</h2>
          </div>
          <div class="row">
            <div class="box">
              <p style="margin:0 0 10px 0; font-size:12px; color:#64748b; font-weight:bold;">BILLED TO:</p>
              <p style="margin:0 0 5px 0; font-weight:bold;">${order.customer.name}</p>
              <p style="margin:0 0 5px 0; font-size:14px;">${order.customer.phone}</p>
              <p style="margin:0; font-size:14px; line-height:1.4;">${order.customer.address}</p>
            </div>
            <div class="box">
              <p style="margin:0 0 10px 0; font-size:12px; color:#64748b; font-weight:bold;">ORDER DETAILS:</p>
              <p style="margin:0 0 5px 0; font-size:14px;"><strong>Invoice No:</strong> ${order.id}</p>
              <p style="margin:0 0 5px 0; font-size:14px;"><strong>Date:</strong> ${order.date}</p>
              <p style="margin:0; font-size:14px;"><strong>Payment Mode:</strong> Cash on Delivery</p>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.qty}</td>
                  <td>₹${item.price.toFixed(2)}</td>
                  <td>₹${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="total-row">
            Grand Total: <span style="color:#2563eb;">₹${order.total.toFixed(2)}</span>
          </div>
          <div class="footer">
            <p>Thank you for shopping with Arun Medicals. Get well soon!</p>
            <p>This is a computer-generated invoice and does not require a physical signature.</p>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-10 w-full">
      {/* Page Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-800 mb-6 pt-2">
        <div>
          <h2 className="text-2xl font-extrabold">👨‍💻 Admin Dashboard</h2>
          <p className="text-sm text-gray-500 font-medium">Store Operations</p>
        </div>
      </div>

      {/* ANALYTICS SUMMARY */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="glass p-3 rounded-2xl border border-gray-100 dark:border-slate-800 flex flex-col justify-center shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Total Sales</p>
          <p className="text-xl font-extrabold text-primary">₹{totalSales}</p>
        </div>
        <div className="glass p-3 rounded-2xl border border-gray-100 dark:border-slate-800 flex flex-col justify-center shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Pending</p>
          <p className="text-xl font-extrabold text-rose-500">{pendingDeliveries} Orders</p>
        </div>
        <div className="glass p-3 rounded-2xl border border-gray-100 dark:border-slate-800 flex flex-col justify-center shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Top Item</p>
          <p className="text-sm font-extrabold text-gray-800 dark:text-gray-200 truncate">Paracetamol</p>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recent Orders</p>
            <p className="text-xs font-bold text-primary">{orders.length} Total</p>
          </div>
          
        {orders.map((order, i) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            {/* Minimal Summary Banner */}
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
                    
                    {/* NEW: PER-ORDER LIVE TRACKING CONTROLLER */}
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
                      <p className="text-[10px] uppercase font-bold text-primary tracking-wider mb-2 flex items-center gap-2">
                        ⚡ Update Customer Live Status
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {steps.map(s => (
                          <button
                            key={s}
                            onClick={(e) => {
                              e.stopPropagation();
                              updateOrderStatus(order.id, s);
                            }}
                            className={`flex-1 py-2 rounded-lg font-bold text-[10px] uppercase transition-all duration-300 border ${
                              order.status === s 
                              ? "bg-primary text-white border-primary shadow-md" 
                              : "bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-600 text-gray-500 hover:bg-gray-100"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

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

                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Medicines Ordered</p>
                      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 text-sm border-b last:border-b-0 border-gray-100 dark:border-slate-700">
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

                    <div className="flex flex-wrap gap-2 pt-2">
                      <button 
                        onClick={() => handleGenerateInvoice(order)}
                        className="flex-1 min-w-[120px] bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2"
                      >
                        📄 Print Invoice
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