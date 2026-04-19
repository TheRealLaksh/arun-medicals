import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function BottomNav() {
  const location = useLocation();
  const { cart } = useCartStore();
  
  if (["/checkout", "/success", "/product"].some(path => location.pathname.includes(path))) {
    return null;
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "💊", label: "Categories", path: "/categories" },
    { icon: "🛒", label: "Cart", path: "/cart", badge: totalItems },
  ];

  return (
    // Fixed full-width bottom bar (positioned just above the 28px disclaimer block)
    <div className="fixed bottom-[28px] left-0 w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.includes(item.path.split('/')[1]));
          
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className={`relative flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? "text-primary" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <div className="relative">
                <span className={`text-2xl block mb-1 transition-transform ${isActive ? "scale-110 drop-shadow-sm" : "grayscale opacity-80"}`}>
                  {item.icon}
                </span>
                {item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 bg-rose-500 text-white text-[9px] font-extrabold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-bold ${isActive ? "opacity-100" : "opacity-80"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}