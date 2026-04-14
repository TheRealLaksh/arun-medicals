import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { medicines } from "../data/medicines";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  
  // Find the specific medicine
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
      className="pb-20" // Extra padding for sticky footer
    >
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-md border border-gray-200 dark:border-slate-700"
      >
        ←
      </button>

      {/* Image Section */}
      <div className="h-72 -mx-4 -mt-2 bg-white dark:bg-slate-800 flex items-center justify-center relative border-b border-gray-200 dark:border-slate-800">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="max-h-56 object-contain mix-blend-multiply dark:mix-blend-normal" 
        />
        {product.prescriptionRequired && (
          <div className="absolute bottom-4 left-4 bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 text-xs font-bold px-2 py-1 rounded shadow-sm">
            Rx Prescription Required
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="pt-5 space-y-5">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold leading-tight pr-4">{product.name}</h1>
            <button className="glass p-2 rounded-full text-gray-500 hover:text-red-500">
              ❤️
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">₹{discountedPrice}</span>
          {product.discount > 0 && (
            <>
              <span className="text-lg text-gray-400 line-through">₹{product.price}</span>
              <span className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass p-3 rounded-xl border border-gray-200 dark:border-slate-800">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Uses</p>
            <p className="text-sm font-medium">{product.uses}</p>
          </div>
          <div className="glass p-3 rounded-xl border border-gray-200 dark:border-slate-800">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Dosage</p>
            <p className="text-sm font-medium">{product.dosage}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Side Effects */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-orange-600 dark:text-orange-400">Side Effects</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {product.sideEffects}
          </p>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-50 rounded-t-2xl">
        <a 
          href="tel:07607790469" 
          className="flex-1 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-center flex items-center justify-center gap-2"
        >
          📞 Call to Order
        </a>
        <button 
          onClick={() => {
            addToCart(product);
            // Optional: Show a mini toast notification here
          }}
          className="flex-1 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          🛒 Add to Cart
        </button>
      </div>

    </motion.div>
  );
}