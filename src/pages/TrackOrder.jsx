import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrderStore } from "../store/useOrderStore";

const steps = ["Ordered", "Packed", "Dispatched", "Delivered"];

export default function TrackOrder() {
  const navigate = useNavigate();
  const { orders, activeOrderId } = useOrderStore();
  
  const currentOrder = orders.find(o => o.id === (activeOrderId || "ORD-001")) || orders[0];
  const orderStatus = currentOrder.status;
  const currentStepIndex = steps.indexOf(orderStatus);

  return (
    <div className="pb-10 -mx-4 md:mx-0">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-slate-800 sticky top-[68px] bg-[var(--bg-color)] z-20 pt-4 px-4">
        <button 
          onClick={() => navigate("/")} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <div>
          <h2 className="text-lg font-bold leading-tight">Track Order</h2>
          <p className="text-xs text-gray-500 font-medium">#{currentOrder.id}</p>
        </div>
      </div>

      <div className="px-4 space-y-6 mt-4">
        
        {/* Animated Map Placeholder */}
        <div className="w-full h-48 bg-gray-100 dark:bg-slate-800 relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-700 shadow-inner">
          {/* Fake Roads */}
          <div className="absolute top-[40%] left-0 w-full h-4 bg-white dark:bg-slate-700" />
          <div className="absolute top-0 left-[30%] w-4 h-full bg-white dark:bg-slate-700" />
          <div className="absolute top-[40%] left-[60%] w-4 h-full bg-white dark:bg-slate-700" />
          
          {/* Store Point */}
          <div className="absolute top-[40%] left-[30%] text-2xl -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-md z-10">🏥</div>
          
          {/* Destination Point */}
          <div className="absolute top-[80%] left-[60%] text-2xl -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-md z-10">🏠</div>

          {/* Moving Delivery Partner */}
          <motion.div 
            animate={{ 
              x: ["-50%", "200%"],
              y: ["-50%", "-50%"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] left-[30%] text-3xl z-20 drop-shadow-md"
          >
            🛵
          </motion.div>
        </div>

        {/* ETA & Driver Info */}
        <div className="flex items-center justify-between glass p-4 rounded-2xl">
          <div>
            <p className="text-sm font-extrabold text-gray-900 dark:text-white">Arriving in 15 mins</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Your order is on the way</p>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">👨🏽‍.</div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white leading-none">Raju</p>
              <p className="text-[10px] text-gray-500 font-medium mt-1">Delivery Partner</p>
            </div>
            <button className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center ml-2 shadow-sm">
              📞
            </button>
          </div>
        </div>

        {/* Step Tracker */}
        <div className="glass p-5 rounded-2xl border border-gray-100 dark:border-slate-800">
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-slate-700" />
            <motion.div 
              className="absolute left-[11px] top-2 w-0.5 bg-primary"
              initial={{ height: "0%" }}
              animate={{ height: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
            />

            <div className="space-y-6">
              {steps.map((step, idx) => {
                const isActive = idx <= currentStepIndex;
                const isLast = idx === steps.length - 1;
                return (
                  <div key={step} className="flex items-start gap-4 relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                        isActive ? "bg-primary border-primary/20" : "bg-gray-200 dark:bg-slate-700 border-white dark:border-slate-800"
                      }`} 
                    />
                    <div>
                      <p className={`text-sm font-bold ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
                        {step}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium">
                        {idx === 0 && currentOrder.date}
                        {idx === 2 && isActive && "Raju has picked up your order."}
                        {idx === 3 && isActive && "Order has been delivered to you."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order Details Summary */}
        <div className="glass p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
          <h3 className="font-extrabold text-sm border-b border-gray-100 dark:border-slate-700 pb-2">Order Summary</h3>
          
          <div className="space-y-3">
            {currentOrder.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-100 dark:bg-slate-700 flex items-center justify-center rounded text-[10px] font-bold text-gray-500">
                    {item.qty}x
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{item.name}</span>
                </div>
                <span className="font-bold">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-200 dark:border-slate-700 pt-3 flex justify-between items-center">
            <span className="font-bold text-gray-500">Total Paid</span>
            <span className="font-extrabold text-lg text-primary">₹{currentOrder.total}</span>
          </div>
        </div>

      </div>
    </div>
  );
}