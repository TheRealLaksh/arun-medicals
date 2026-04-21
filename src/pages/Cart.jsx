import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const total = cart.reduce((acc, item) => {
    // Uses the price dynamically added to the cart item when we clicked "Add"
    const itemPrice = item.price - (item.price * (item.discount || 0) / 100);
    return acc + (itemPrice * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="text-6xl mb-4 opacity-50">🛒</span>
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Looks like you haven't added any medicines yet.</p>
        <button 
          onClick={() => navigate("/")}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/30"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pb-24 space-y-4"
    >
      <h2 className="text-2xl font-extrabold tracking-tight px-1">Your Cart</h2>

      <div className="space-y-3">
        {cart.map((item) => {
          const itemPrice = item.price - (item.price * (item.discount || 0) / 100);

          return (
            <div key={item.cartItemId} className="glass p-3 rounded-2xl flex gap-4 relative border border-gray-100 dark:border-slate-800 shadow-sm">
              <button 
                onClick={() => removeFromCart(item.cartItemId)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 rounded-full text-xs font-bold"
              >
                ✕
              </button>
              
              <div className="w-20 h-20 bg-white dark:bg-slate-700/50 rounded-xl flex-shrink-0 p-2 flex items-center justify-center">
                <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center py-1">
                <h3 className="font-bold text-sm leading-tight pr-6">{item.name}</h3>
                
                {/* Dynamically show the variant dosage here! */}
                <p className="text-[10px] text-gray-500 font-semibold mb-2">
                  {item.selectedVariant?.dosage || item.category}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <p className="font-extrabold text-primary">₹{itemPrice.toFixed(2)}</p>
                  
                  {/* IMPORTANT: Using cartItemId for quantity updates */}
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-800 rounded-lg px-1 py-1 shadow-sm h-[30px]">
                    <button 
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="w-6 h-full flex items-center justify-center font-bold text-sm text-gray-600 dark:text-gray-300"
                    >
                      -
                    </button>
                    <span className="text-xs font-extrabold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="w-6 h-full flex items-center justify-center font-bold text-sm text-gray-600 dark:text-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-3">
        <h3 className="font-bold text-sm border-b border-gray-100 dark:border-slate-700 pb-2">Bill Details</h3>
        <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400">
          <span>Item Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400">
          <span>Delivery Fee</span>
          <span className="text-green-600 dark:text-green-400 font-bold">FREE</span>
        </div>
        <div className="flex justify-between text-lg font-extrabold pt-2 border-t border-gray-100 dark:border-slate-700">
          <span>To Pay</span>
          <span className="text-primary">₹{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 z-40 glass border-t border-gray-200 dark:border-slate-800 rounded-t-3xl pb-8 sm:pb-4">
        <button 
          onClick={() => navigate("/checkout")}
          className="w-full py-4 rounded-xl bg-primary text-white font-extrabold shadow-lg shadow-primary/30 flex items-center justify-between px-6 hover:bg-blue-600 transition-colors"
        >
          <span>₹{total.toFixed(2)}</span>
          <span className="flex items-center gap-2">
            Proceed to Checkout <span>→</span>
          </span>
        </button>
      </div>
    </motion.div>
  );
}