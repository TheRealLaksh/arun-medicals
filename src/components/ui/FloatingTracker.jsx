import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useOrderStore } from "../../store/useOrderStore";

export default function FloatingTracker() {
  const { activeOrderId } = useOrderStore();
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the tracker on pages where it doesn't make sense
  const hiddenPages = ["/track", "/checkout", "/success"];
  const isHidden = hiddenPages.some(path => location.pathname.includes(path));

  if (!activeOrderId || isHidden) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={() => navigate("/track")}
        className="fixed bottom-[100px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-primary/20 flex items-center justify-between cursor-pointer z-50 overflow-hidden group"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl relative">
            🛵
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-800"></span>
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Arriving in</p>
            <p className="text-sm font-extrabold text-primary">15 Minutes</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <div className="text-right">
            <p className="text-[10px] text-gray-500 font-bold">Order</p>
            <p className="text-xs font-extrabold">#{activeOrderId.split('-')[1]}</p>
          </div>
          <span className="text-gray-400 group-hover:translate-x-1 transition-transform">❯</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}