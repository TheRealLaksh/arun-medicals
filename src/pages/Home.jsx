import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";

export default function Home() {
  const [search, setSearch] = useState("");
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <div className="space-y-8">
      
      {/* Floating Search Bar */}
      <div className="sticky top-0 z-30 pt-2 pb-4 bg-gradient-to-b from-[var(--bg-color)] to-transparent -mx-4 px-4">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-3xl bg-white dark:bg-slate-800 border-none outline-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none text-sm focus:ring-2 focus:ring-primary transition-all font-medium"
          />
        </div>
      </div>

      {/* Horizontal Scroll Categories */}
      <div className="space-y-4">
        <div className="flex justify-between items-end px-1">
          <h3 className="font-extrabold text-xl tracking-tight">Shop by Category</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 px-1 -mx-4 sm:mx-0 sm:px-0">
          <div className="w-1 flex-shrink-0 sm:hidden"></div> {/* Mobile spacer */}
          {categories.map((cat, i) => (
            <Link key={i} to={`/category/${cat}`} className="glass px-6 py-3 rounded-2xl whitespace-nowrap text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              {cat}
            </Link>
          ))}
          <div className="w-1 flex-shrink-0 sm:hidden"></div>
        </div>
      </div>

      {/* Featured Grid */}
      <div className="space-y-4 pb-10">
        <h3 className="font-extrabold text-xl tracking-tight px-1">Popular Right Now</h3>
        <div className="grid grid-cols-2 gap-4">
          {medicines.filter(m => m.name.toLowerCase().includes(search.toLowerCase())).map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              key={item.id} 
              className="glass-card p-3 flex flex-col relative group"
            >
              {item.popular && (
                <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-400 to-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-br-2xl rounded-tl-2xl z-10 shadow-md">
                  POPULAR
                </span>
              )}
              {item.discount > 0 && (
                <span className="absolute top-3 right-3 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-extrabold px-2 py-1 rounded-lg backdrop-blur-md">
                  {item.discount}% OFF
                </span>
              )}
              
              <Link to={`/product/${item.id}`} className="mt-4 mb-2">
                <div className="h-32 bg-gray-50 dark:bg-slate-700/30 rounded-2xl mb-3 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                  <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal drop-shadow-sm" />
                </div>
                <h3 className="text-sm font-bold line-clamp-2 leading-tight mb-1">{item.name}</h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{item.category}</p>
              </Link>

              <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-slate-700/50">
                <div>
                  <p className="font-extrabold text-base text-primary">₹{item.price - (item.price * item.discount / 100)}</p>
                  {item.discount > 0 && <p className="text-[10px] line-through text-gray-400 font-medium">₹{item.price}</p>}
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item)}
                  className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-colors h-10 w-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-sm"
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}