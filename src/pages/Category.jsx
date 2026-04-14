import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";

export default function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  // Filter medicines by the URL parameter
  const categoryMedicines = medicines.filter(
    (m) => m.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="space-y-4"
    >
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[72px] bg-[var(--bg-color)] z-20 pt-2">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">{categoryName}</h2>
      </div>

      {/* Medicine Grid */}
      {categoryMedicines.length === 0 ? (
        <div className="text-center text-gray-500 py-10 flex flex-col items-center">
          <span className="text-4xl mb-3">💊</span>
          <p>No medicines found in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {categoryMedicines.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={item.id} 
              className="glass p-3 rounded-2xl flex flex-col relative border border-gray-200 dark:border-slate-800 overflow-hidden"
            >
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
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}