import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";

export default function Home() {
  const [search, setSearch] = useState("");
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <div className="space-y-6">
      
      {/* Disclaimer */}
      <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-[10px] p-2 rounded-lg text-center font-medium border border-orange-200 dark:border-orange-800/50 mt-2">
        ⚠️ Medicines should be taken only after consultation with a doctor.
      </div>

      {/* Sticky Search Bar */}
      <div className="sticky top-[72px] z-30 py-2 glass px-4 -mx-4">
        <input
          type="text"
          placeholder="Search medicines, health products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 outline-none shadow-sm text-sm focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* Horizontal Scroll Categories */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg px-1">Shop by Category</h3>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
          {categories.map((cat, i) => (
            <Link key={i} to={`/category/${cat}`} className="glass px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors">
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg px-1">Popular Right Now</h3>
        <div className="grid grid-cols-2 gap-4">
          {medicines.filter(m => m.name.toLowerCase().includes(search.toLowerCase())).map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={item.id} 
              className="glass p-3 rounded-2xl flex flex-col relative border border-gray-200 dark:border-slate-800 overflow-hidden"
            >
              {item.popular && (
                <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-400 to-red-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-lg z-10">
                  POPULAR
                </span>
              )}
              {item.discount > 0 && (
                <span className="absolute top-2 right-2 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {item.discount}% OFF
                </span>
              )}
              
              <Link to={`/product/${item.id}`}>
                <div className="h-28 bg-white dark:bg-slate-800 rounded-xl mb-3 flex items-center justify-center p-2">
                  <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2 leading-tight mb-1">{item.name}</h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">{item.category}</p>
              </Link>

              <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100 dark:border-slate-800">
                <div>
                  <p className="font-bold text-sm">₹{item.price - (item.price * item.discount / 100)}</p>
                  {item.discount > 0 && <p className="text-[10px] line-through text-gray-400">₹{item.price}</p>}
                </div>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg"
                >
                  +
                </button>
              </div>
              {item.stock <= 3 && (
                <p className="text-[9px] text-red-500 font-medium mt-1.5">Only {item.stock} left!</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}   