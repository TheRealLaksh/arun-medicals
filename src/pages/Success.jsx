import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useOrderStore } from "../store/useOrderStore"; 

export default function Success() {
  const navigate = useNavigate();
  const { orders, setActiveOrderId } = useOrderStore(); 
  
  // For demo purposes, track "ORD-001" and set it as active when landing here
  const currentOrder = orders.find(o => o.id === "ORD-001") || orders[0];

  useEffect(() => {
    // This tells the app to start showing the floating tracker 
    setActiveOrderId(currentOrder.id);
  }, [currentOrder.id, setActiveOrderId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-emerald-50 shadow-lg shadow-emerald-500/20">
        ✓
      </motion.div>

      <h1 className="text-3xl font-extrabold mb-2">Order Placed!</h1>
      <p className="text-gray-500 text-sm mb-8 font-medium">Order #{currentOrder.id}</p>
      
      <div className="glass p-5 rounded-2xl border border-gray-100 dark:border-slate-800 mb-8 w-full max-w-xs bg-gray-50/50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
        <p className="text-[10px] text-gray-400 uppercase font-extrabold mb-1 tracking-widest text-left pl-2">Preparing to dispatch</p>
        <p className="font-extrabold text-sm text-gray-800 dark:text-white text-left pl-2 leading-snug">
          Your medicine will be delivered to <br/><span className="text-primary">{currentOrder.customer.address.split(',')[0]}</span>
        </p>
      </div>

      <div className="flex flex-col w-full max-w-xs gap-3">
        <button 
          onClick={() => navigate("/track")} 
          className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-sm uppercase shadow-lg shadow-primary/30 transition-transform active:scale-95"
        >
          Track Order Live
        </button>
        <button 
          onClick={() => navigate("/")} 
          className="w-full bg-transparent text-gray-500 dark:text-gray-400 py-3 rounded-2xl font-bold text-sm uppercase transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}