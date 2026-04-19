import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const { cart } = useCartStore();
  const location = useLocation();
  
  if (location.pathname === "/checkout" || location.pathname === "/success") {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 shadow-sm"
    >
      <div className="w-full max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Blinkit-style Location Header */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl drop-shadow-sm">⚡</span>
            <h1 className="text-lg md:text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Arun Medicals
            </h1>
          </div>
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
            <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-md">📍 Delivery To</span>
            <span className="text-gray-700 dark:text-gray-300 truncate max-w-[120px]">Sigra, Varanasi</span> 
          </p>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />

          <a 
            href="tel:07607790469" 
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 text-primary border border-blue-100 dark:border-slate-700 hover:scale-105 transition-transform"
          >
            📞
          </a>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 dark:bg-slate-800 text-primary dark:text-white transition-all hover:scale-105 flex-shrink-0"
          >
            <span className="text-lg">🛒</span>
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-md"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}