import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const [imgIndex, setImgIndex] = useState(0);

  const product = medicines.find((m) => m.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate("/")} className="mt-4 text-primary underline">Go Home</button>
      </div>
    );
  }

  const discountedPrice = product.price - (product.price * product.discount / 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="pb-20"
    >
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-4 left-4 z-50 w-10 h-10 flex items-center justify-center glass rounded-full shadow-md border border-gray-200 dark:border-slate-700"
      >
        ←
      </button>

      {/* Image Slider */}
      <div className="h-72 -mx-4 -mt-2 bg-white dark:bg-slate-800/50 flex flex-col items-center justify-center relative border-b border-gray-100 dark:border-slate-800">
        <AnimatePresence mode="wait">
          <motion.img 
            key={imgIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            src={product.images[imgIndex]} 
            alt={product.name} 
            className="max-h-52 object-contain mix-blend-multiply dark:mix-blend-normal drop-shadow-lg" 
          />
        </AnimatePresence>
        
        {/* Pagination Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 flex gap-2">
            {product.images.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setImgIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${imgIndex === idx ? "bg-primary w-4" : "bg-gray-300 dark:bg-slate-600"}`} 
              />
            ))}
          </div>
        )}

        {/* Labels */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {product.prescriptionRequired && (
            <div className="bg-rose-100 text-rose-700 dark:bg-rose-900/80 dark:text-rose-300 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
              Rx Prescription Required
            </div>
          )}
          {product.stock <= 5 && (
            <div className="bg-orange-100 text-orange-700 dark:bg-orange-900/80 dark:text-orange-300 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
              Only {product.stock} left!
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="pt-5 space-y-6">
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{product.category}</p>
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-extrabold leading-tight pr-4">{product.name}</h1>
            <button className="glass p-2.5 rounded-full text-gray-400 hover:text-red-500 transition-colors">
              ❤️
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-primary">₹{discountedPrice.toFixed(2)}</span>
          {product.discount > 0 && (
            <>
              <span className="text-lg text-gray-400 font-medium line-through">₹{product.price}</span>
              <span className="bg-green-100 border border-green-200 text-green-700 dark:border-green-800 dark:bg-green-900/50 dark:text-green-400 text-[10px] font-extrabold px-2 py-1 rounded-md tracking-wide">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass p-3 rounded-2xl border border-gray-100 dark:border-slate-800">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Uses</p>
            <p className="text-xs font-semibold leading-relaxed">{product.uses}</p>
          </div>
          <div className="glass p-3 rounded-2xl border border-gray-100 dark:border-slate-800">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Dosage</p>
            <p className="text-xs font-semibold leading-relaxed">{product.dosage}</p>
          </div>
        </div>

        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
          <div>
            <h3 className="font-extrabold text-sm mb-1">Description</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="font-extrabold text-sm mb-1 text-orange-600 dark:text-orange-400">Side Effects</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {product.sideEffects}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-40 rounded-t-3xl pb-8 sm:pb-4">
        <a 
          href="tel:07607790469" 
          className="flex-1 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-center flex items-center justify-center gap-2 text-sm transition-all hover:bg-primary/5"
        >
          📞 Call to Order
        </a>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="flex-1 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          🛒 Add to Cart
        </motion.button>
      </div>

    </motion.div>
  );
}