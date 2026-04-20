import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";

export default function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity } = useCartStore();

  const getItemQuantity = (id) => {
    const item = cart.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const categoryMedicines = medicines.filter(
    (m) => m.category.toLowerCase() === decodeURIComponent(categoryName).toLowerCase()
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="space-y-4 pb-10"
    >
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[68px] bg-[var(--bg-color)] z-20 pt-4 -mx-4 px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">{decodeURIComponent(categoryName)}</h2>
      </div>

      {categoryMedicines.length === 0 ? (
        <div className="text-center text-gray-500 py-20 flex flex-col items-center">
          <span className="text-5xl mb-4 opacity-50">💊</span>
          <p className="font-medium text-sm">No medicines found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {categoryMedicines.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={item.id} 
              className="glass-card p-3 flex flex-col relative"
            >
              {item.discount > 0 && (
                <span className="absolute top-2 right-2 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md border border-green-500/20 z-10">
                  {item.discount}% OFF
                </span>
              )}
              
              <Link to={`/product/${item.id}`} className="mt-1 mb-2">
                <div className="h-28 bg-white dark:bg-slate-700/50 rounded-xl mb-3 flex items-center justify-center p-2">
                  <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                <h3 className="text-xs font-bold line-clamp-2 leading-tight mb-1">{item.name}</h3>
                <p className="text-[10px] text-gray-500 font-medium">{item.category}</p>
              </Link>

              <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100 dark:border-slate-700/50">
                <div>
                  <p className="font-extrabold text-sm text-primary">₹{(item.price - (item.price * item.discount / 100)).toFixed(2)}</p>
                  {item.discount > 0 && <p className="text-[9px] line-through text-gray-400">₹{item.price}</p>}
                </div>
                
                {/* DYNAMIC ADD / QUANTITY BUTTON */}
                {(() => {
                  const quantity = getItemQuantity(item.id);
                  if (quantity === 0) {
                    return (
                      <button 
                        onClick={() => addToCart(item)}
                        className="bg-primary/10 dark:bg-slate-700/80 text-primary dark:text-white hover:bg-primary hover:text-white transition-colors h-8 w-8 rounded-lg flex items-center justify-center font-bold text-lg"
                      >
                        +
                      </button>
                    );
                  }
                  return (
                    <div className="flex items-center gap-0.5 bg-primary text-white rounded-lg h-8 px-1 shadow-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                        className="w-5 h-full flex items-center justify-center font-bold text-sm active:scale-90 transition-transform"
                      >
                        -
                      </button>
                      <span className="text-[10px] font-extrabold w-3 text-center">{quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, quantity + 1)}
                        className="w-5 h-full flex items-center justify-center font-bold text-sm active:scale-90 transition-transform"
                      >
                        +
                      </button>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}