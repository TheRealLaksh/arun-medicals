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
      className="sticky top-0 z-50 w-full glass shadow-sm border-b border-white/40 dark:border-slate-800/80"
    >
      <div className="w-full max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Location & Delivery Time */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl drop-shadow-sm">⚡</span>
            <h1 className="text-[16px] md:text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
              Arun Medicals
            </h1>
          </div>
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
            <span className="text-primary truncate max-w-[120px]">Sigra, Varanasi</span> 
            <span className="text-gray-300 dark:text-slate-600 hidden sm:inline">|</span> 
            <span className="hidden sm:inline">20 min delivery</span>
          </p>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <a 
            href="tel:07607790469" 
            className="w-9 h-9 md:w-auto md:px-4 flex items-center justify-center rounded-full md:rounded-xl bg-blue-50 dark:bg-slate-800 text-primary border border-blue-100 dark:border-slate-700 shadow-sm hover:scale-105 transition-transform"
          >
            📞 <span className="hidden md:inline ml-2 text-sm font-bold">Call Us</span>
          </a>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative w-10 h-10 md:w-auto md:px-4 flex items-center justify-center rounded-full md:rounded-xl bg-primary/10 dark:bg-slate-800 text-primary dark:text-white transition-all hover:scale-105 flex-shrink-0"
          >
            <span className="text-lg">🛒</span> <span className="hidden md:inline ml-2 text-sm font-bold">Cart</span>
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-rose-500 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[var(--bg-color)] shadow-md"
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