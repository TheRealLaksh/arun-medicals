import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 bg-green-100 dark:bg-green-900/50 text-green-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-lg shadow-green-500/20"
      >
        ✓
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 px-4">
          Thank you for choosing Arun Medicals. Your medicines will be delivered shortly.
        </p>

        <div className="glass p-4 rounded-xl border border-gray-200 dark:border-slate-800 mb-8 inline-block text-left w-full max-w-xs">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Estimated Delivery</p>
          <p className="font-bold text-lg text-primary">Today, in 30 mins</p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => navigate("/")}
        className="w-full max-w-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3.5 rounded-xl font-bold shadow-md hover:scale-[1.02] transition-transform"
      >
        Back to Home
      </motion.button>
    </div>
  );
}