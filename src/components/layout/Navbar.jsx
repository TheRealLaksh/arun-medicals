import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function Navbar() {
  const { cart } = useCartStore();
  const location = useLocation();
  
  // Hide navbar on specific pages for a cleaner flow
  if (location.pathname === "/checkout" || location.pathname === "/success") {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 px-4 py-3 glass flex justify-between items-center rounded-b-3xl"
    >
      {/* Left: Location & Delivery Time (Swiggy/Blinkit Style) */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-xl drop-shadow-sm">⚡</span>
          <h1 className="text-[16px] font-extrabold text-gray-900 dark:text-white tracking-tight">
            Arun Medicals
          </h1>
        </div>
        <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
          <span className="text-primary truncate max-w-[120px]">Sigra, Varanasi</span> 
          <span className="text-gray-300 dark:text-slate-600">|</span> 
          <span>20 min</span>
        </p>
      </div>
      
      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <a 
          href="tel:07607790469" 
          className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 text-primary border border-blue-100 dark:border-slate-700 shadow-sm hover:scale-105 transition-transform"
        >
          📞
        </a>

        {/* Cart Icon */}
        <Link 
          to="/cart" 
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-slate-800 text-primary dark:text-white transition-all hover:scale-105"
        >
          <span className="text-lg">🛒</span>
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-md"
            >
              {totalItems}
            </motion.span>
          )}
        </Link>
      </div>
    </motion.div>
  );
}