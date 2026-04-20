import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import { useCartStore } from "../../store/useCartStore";

export default function Navbar() {
  const location = useLocation();
  const cartItems = useCartStore((state) => state.cart);
  
  // Fixed: Changed item.qty to item.quantity to match your cart store
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Check if we are on a page where the BottomNav is hidden
  const isBottomNavHidden = ["/checkout", "/success", "/product"].some(path => 
    location.pathname.includes(path)
  );

  return (
    <nav className="fixed top-0 w-full z-40 glass border-b border-gray-100 dark:border-slate-800 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto md:max-w-4xl">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 outline-none">
          <div className="w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm shadow-primary/30">
            A
          </div>
          <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white">
            Arun Medicals
          </span>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <Link 
            to="/cart" 
            className={`relative outline-none p-1 ${isBottomNavHidden ? "block" : "hidden md:block"}`}
          >
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}