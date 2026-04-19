import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrderStore } from "../store/useOrderStore"; 

const steps = ["Ordered", "Packed", "Dispatched", "Delivered"];

export default function Success() {
  const navigate = useNavigate();
  
  // For demo purposes, we will track "ORD-001" (Rahul Sharma)
  const { orders } = useOrderStore(); 
  const currentOrder = orders.find(o => o.id === "ORD-001") || orders[0];
  const orderStatus = currentOrder.status;
  
  const currentStepIndex = steps.indexOf(orderStatus);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-emerald-50">
        ✓
      </motion.div>

      <h1 className="text-2xl font-extrabold mb-2">Order Confirmed!</h1>
      <p className="text-gray-500 text-sm mb-1 font-medium">Order #{currentOrder.id}</p>
      <p className="text-gray-400 text-xs mb-10">Your medicine is on the way to {currentOrder.customer.address.split(',')[0]}.</p>

      {/* STEP PROGRESS BAR */}
      <div className="w-full max-w-sm mb-12 relative px-4">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-slate-800 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, idx) => {
            const isActive = idx <= currentStepIndex;
            return (
              <div key={step} className="relative z-10 flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 ${
                    isActive ? "bg-primary border-primary" : "bg-white dark:bg-slate-900 border-gray-200"
                  }`} 
                />
                <span className={`text-[10px] mt-3 font-bold uppercase absolute -bottom-6 w-20 ${
                  isActive ? "text-primary" : "text-gray-400"
                }`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass p-5 rounded-2xl border border-gray-100 dark:border-slate-800 mb-8 w-full max-w-xs bg-gray-50/50 shadow-sm">
        <p className="text-[10px] text-gray-400 uppercase font-extrabold mb-1 tracking-widest">Live Status</p>
        <p className="font-extrabold text-lg text-gray-800 dark:text-white">
          {orderStatus === "Delivered" ? "✅ Order Delivered" : `🚚 ${orderStatus}...`}
        </p>
      </div>

      <button onClick={() => navigate("/")} className="w-full max-w-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-2xl font-bold text-sm uppercase">
        Back to Home
      </button>
    </div>
  );
}