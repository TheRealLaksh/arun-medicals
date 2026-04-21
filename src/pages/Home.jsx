import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories, medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";
import { useUIStore } from "../store/useUIStore";
import PrescriptionBanner from "../components/ui/PrescriptionBanner";

export default function Home() {
  const { searchQuery, setSearchQuery } = useUIStore();
  const { cart, addToCart, updateQuantity } = useCartStore();

  // Helper to find the lowest priced variant to display on the card
  const getLowestVariant = (item) => {
    if (!item.variants || item.variants.length === 0) return null;
    return item.variants.reduce((prev, curr) => {
      const prevPrice = prev.price - (prev.price * prev.discount / 100);
      const currPrice = curr.price - (curr.price * curr.discount / 100);
      return currPrice < prevPrice ? curr : prev;
    });
  };

  const getItemQuantity = (itemId, variantId) => {
    const uniqueCartId = `${itemId}-${variantId}`;
    const item = cart.find(i => i.cartItemId === uniqueCartId);
    return item ? item.quantity : 0;
  };

  const filteredMedicines = medicines.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-6 w-full">
      
      {/* Floating Search Bar (Instamart Style) */}
      <div className="sticky top-[68px] z-30 pt-1 pb-3 bg-[var(--bg-color)]">
        <div className="relative shadow-sm max-w-lg mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search for medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 outline-none text-sm font-bold focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Main Store Banner */}
      <Link to="/store" className="block relative outline-none rounded-2xl group mx-1">
        <div className="bg-gradient-to-r from-blue-600 to-primary rounded-2xl p-5 text-white shadow-md relative overflow-hidden transition-all duration-300">
          <div className="relative z-10 flex flex-col justify-center h-full">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold mb-1 tracking-tight">Arun Medicals</h2>
                <p className="text-xs font-medium opacity-90 flex items-center gap-1">
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">4.4 ⭐</span> 
                  Sigra, Varanasi
                </p>
              </div>
              <div className="bg-white text-primary text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                Store Info ℹ️
              </div>
            </div>
            <div className="mt-4 inline-block">
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                🛵 Fast Home Delivery
              </span>
            </div>
          </div>
          <div className="absolute -right-2 -bottom-6 opacity-20 text-[100px] leading-none mix-blend-overlay">🏥</div>
        </div>
      </Link>

      {!searchQuery && (
        <div className="-mx-4 md:mx-0">
          <PrescriptionBanner />
        </div>
      )}

      {!searchQuery && (
        <div className="space-y-3">
          <h3 className="font-extrabold text-lg tracking-tight px-1">Shop by Category</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <Link key={i} to={`/category/${cat}`} className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                  💊
                </div>
                <span className="text-[10px] md:text-xs font-bold text-center leading-tight line-clamp-2">
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-lg tracking-tight px-1">
          {searchQuery ? "Search Results" : "Popular Right Now"}
        </h3>
        
        {filteredMedicines.length === 0 ? (
          <div className="text-center text-gray-500 py-10 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
            <p className="font-bold">No medicines found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredMedicines.slice(0, 12).map((item, i) => {
              const lowestVariant = getLowestVariant(item);
              if (!lowestVariant) return null; // Skip if no variants exist

              const discountedPrice = lowestVariant.price - (lowestVariant.price * lowestVariant.discount / 100);

              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.id} 
                  className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col relative"
                >
                  <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {item.tags.includes("Popular") && (
                      <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">
                        POPULAR
                      </span>
                    )}
                    {lowestVariant.discount > 0 && (
                      <span className="bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 text-[9px] font-extrabold px-1.5 py-0.5 rounded border border-green-200 dark:border-green-500/30">
                        {lowestVariant.discount}% OFF
                      </span>
                    )}
                  </div>
                  
                  <Link to={`/product/${item.id}`} className="mt-1 mb-2 block">
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl aspect-square mb-3 flex items-center justify-center p-3 relative overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                    </div>
                    <h3 className="text-xs md:text-sm font-bold line-clamp-2 leading-tight mb-1 text-gray-900 dark:text-white">{item.name}</h3>
                    {/* Display the dosage of the lowest variant directly below the name */}
                    <p className="text-[10px] text-gray-500 font-semibold">{lowestVariant.dosage}</p>
                  </Link>

                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-sm text-gray-900 dark:text-white">
                        ₹{discountedPrice.toFixed(2)}
                      </p>
                      {lowestVariant.discount > 0 && <p className="text-[10px] line-through text-gray-400 font-medium">₹{lowestVariant.price}</p>}
                    </div>
                    
                    {(() => {
                      const quantity = getItemQuantity(item.id, lowestVariant.variantId);
                      const cartItemId = `${item.id}-${lowestVariant.variantId}`;
                      
                      if (quantity === 0) {
                        return (
                          <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => addToCart({
                              ...item, 
                              selectedVariant: lowestVariant, 
                              price: lowestVariant.price, 
                              discount: lowestVariant.discount
                            })}
                            className="border border-primary text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors px-4 py-1.5 rounded-lg font-extrabold text-xs shadow-sm"
                          >
                            ADD
                          </motion.button>
                        );
                      }
                      return (
                        <div className="flex items-center gap-1 bg-primary text-white rounded-lg px-1 py-1 shadow-sm h-[30px]">
                          <button 
                            onClick={() => updateQuantity(cartItemId, quantity - 1)}
                            className="w-6 h-full flex items-center justify-center font-bold text-sm active:scale-90 transition-transform"
                          >
                            -
                          </button>
                          <span className="text-xs font-extrabold w-4 text-center">{quantity}</span>
                          <button 
                            onClick={() => updateQuantity(cartItemId, quantity + 1)}
                            className="w-6 h-full flex items-center justify-center font-bold text-sm active:scale-90 transition-transform"
                          >
                            +
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}