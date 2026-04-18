import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories, medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";
import { useUIStore } from "../store/useUIStore";

export default function Home() {
  const { searchQuery, setSearchQuery } = useUIStore();
  const addToCart = useCartStore(state => state.addToCart);

  const filteredMedicines = medicines.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-10 w-full">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-1">Arun Medicals</h2>
          <p className="text-xs md:text-sm font-medium opacity-90 flex items-center gap-1">
            <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">4.4 ⭐</span> 
            Sigra, Varanasi
          </p>
          <p className="text-[10px] md:text-xs uppercase tracking-wider mt-4 font-bold bg-white/20 inline-block px-3 py-1.5 rounded-full">
            🛵 Fast 20 min delivery
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 text-[120px] leading-none">🏥</div>
      </div>

      {/* Floating Search Bar */}
      <div className="sticky top-0 z-30 pt-2 pb-4 bg-gradient-to-b from-[var(--bg-color)] via-[var(--bg-color)] to-transparent">
        <div className="relative shadow-sm max-w-lg">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search medicines or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 outline-none text-sm md:text-base focus:border-primary transition-all font-medium backdrop-blur-md"
          />
        </div>
      </div>

      {/* Horizontal Scroll Categories */}
      {!searchQuery && (
        <div className="space-y-3">
          <h3 className="font-extrabold text-lg md:text-xl tracking-tight">Shop by Category</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat, i) => (
              <Link key={i} to={`/category/${cat}`} className="glass px-5 py-3 rounded-xl whitespace-nowrap text-xs md:text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-gray-100 dark:border-slate-700/50">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid - Responsive layout */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-lg md:text-xl tracking-tight">
          {searchQuery ? "Search Results" : "Popular Right Now"}
        </h3>
        
        {filteredMedicines.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p>No medicines found.</p>
          </div>
        ) : (
          /* RESPONSIVE GRID: 2 cols on mobile, 3 on tablets, 4 on desktop */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {filteredMedicines.slice(0, 12).map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                key={item.id} 
                className="glass-card p-3 md:p-4 flex flex-col relative group cursor-pointer"
              >
                {/* Badges */}
                {item.tags.includes("Popular") && (
                  <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-400 to-rose-500 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 rounded-br-xl rounded-tl-3xl z-10 shadow-md">
                    POPULAR
                  </span>
                )}
                {item.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] md:text-[11px] font-extrabold px-1.5 py-0.5 rounded-md backdrop-blur-md border border-green-500/20">
                    {item.discount}% OFF
                  </span>
                )}
                
                <Link to={`/product/${item.id}`} className="mt-4 mb-2">
                  <div className="h-28 md:h-36 bg-white dark:bg-slate-700/50 rounded-xl mb-3 flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform">
                    <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold line-clamp-2 leading-tight mb-1">{item.name}</h3>
                  <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">{item.category}</p>
                </Link>

                <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-slate-700/50">
                  <div>
                    <p className="font-extrabold text-sm md:text-base text-primary">₹{(item.price - (item.price * item.discount / 100)).toFixed(2)}</p>
                    {item.discount > 0 && <p className="text-[9px] md:text-[10px] line-through text-gray-400 font-medium">₹{item.price}</p>}
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart(item)}
                    className="bg-primary/10 dark:bg-slate-700/80 text-primary dark:text-white hover:bg-primary hover:text-white transition-colors h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-lg"
                  >
                    +
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}