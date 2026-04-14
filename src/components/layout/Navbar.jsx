import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function Navbar() {
  const { cart } = useCartStore();
  const location = useLocation();
  
  // Hide navbar on checkout and success pages for a cleaner flow
  if (location.pathname === "/checkout" || location.pathname === "/success") {
    return null;
  }

  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 p-4 glass flex justify-between items-center"
    >
      <Link to="/">
        <h1 className="text-xl font-bold text-primary">Arun Medicals</h1>
        <p className="text-[10px] opacity-70 font-medium">
          4.4 ⭐ • Sigra, Varanasi • 20 min delivery
        </p>
      </Link>
      
      <div className="flex items-center gap-3">
        {/* Cart Icon */}
        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
          <span className="text-xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        
        {/* Call Button */}
        <a href="tel:07607790469" className="text-sm px-4 py-2 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-blue-600 transition-colors">
          📞 Call
        </a>
      </div>
    </motion.div>
  );
}