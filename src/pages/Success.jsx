import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 bg-green-100 dark:bg-green-900/50 text-green-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-xl shadow-green-500/20 border-4 border-green-200 dark:border-green-800"
      >
        ✓
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-extrabold mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 px-4 font-medium leading-relaxed">
          Thank you for choosing Arun Medicals. Your medicines are being prepared for delivery.
        </p>

        <div className="glass p-5 rounded-2xl border border-gray-100 dark:border-slate-800 mb-8 inline-block text-left w-full max-w-xs shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-extrabold tracking-wider mb-1">Estimated Arrival</p>
          <p className="font-extrabold text-lg text-primary flex items-center gap-2">
            <span>⏱️</span> Today, in 20-30 mins
          </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => navigate("/")}
        className="w-full max-w-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform text-sm uppercase tracking-wide"
      >
        Back to Home
      </motion.button>
    </div>
  );
}