import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../../store/useCartStore";

export default function BottomNav() {
  const location = useLocation();
  const { cart } = useCartStore();
  
  // Hide on pages where it interrupts the flow, OR on larger desktop screens
  if (["/checkout", "/success", "/product"].some(path => location.pathname.includes(path))) {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "💊", label: "Categories", path: "/category/Tablets & Capsules" },
    { icon: "🛒", label: "Cart", path: "/cart", badge: totalItems },
  ];

  return (
    // Only visible on small and medium screens. Desktop users use Navbar.
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 md:hidden">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-3xl p-2 px-4 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/50 dark:border-slate-700/50"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.includes(item.path.split('/')[1]));
          
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className={`relative flex flex-col items-center justify-center w-16 h-12 rounded-2xl transition-all duration-300 ${
                isActive ? "bg-primary/10 text-primary dark:bg-slate-800 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              <span className={`text-xl mb-0.5 transition-transform duration-300 ${isActive ? "scale-110 drop-shadow-sm" : "scale-100 grayscale opacity-70"}`}>
                {item.icon}
              </span>
              <span className={`text-[9px] font-bold ${isActive ? "opacity-100" : "opacity-0 absolute -bottom-2"}`}>
                {item.label}
              </span>

              {item.badge > 0 && (
                <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border border-[var(--bg-color)] animate-pulse"></span>
              )}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}