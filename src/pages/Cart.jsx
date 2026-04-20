import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity } = useCartStore();

  const subtotal = cart.reduce((total, item) => {
    const price = item.price - (item.price * item.discount / 100);
    return total + (price * item.quantity);
  }, 0);

  const deliveryFee = subtotal > 0 ? 20 : 0; 
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center space-y-4">
        <div className="text-7xl mb-4 opacity-50 drop-shadow-xl">🛒</div>
        <h2 className="text-2xl font-extrabold">Your cart is empty</h2>
        <p className="text-sm text-gray-500 font-medium">Looks like you haven't added any medicines yet.</p>
        <Link to="/" className="mt-6 bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-transform hover:scale-105 inline-block">
          Browse Medicines
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }}
      className="pb-28 space-y-4"
    >
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[68px] bg-[var(--bg-color)] z-20 pt-4 -mx-4 px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>

      <div className="space-y-3 pt-2">
        <AnimatePresence>
          {cart.map((item) => {
            const discountedPrice = item.price - (item.price * item.discount / 100);
            return (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                key={item.id} 
                className="glass p-3 rounded-2xl flex gap-3 border border-gray-100 dark:border-slate-800"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-700/50 rounded-xl flex-shrink-0 flex items-center justify-center p-1">
                  <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h3 className="font-bold text-xs line-clamp-1">{item.name}</h3>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{item.category}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-extrabold text-sm text-primary">₹{(discountedPrice * item.quantity).toFixed(2)}</div>
                    
                    <div className="flex items-center gap-2 bg-primary/5 dark:bg-slate-800 rounded-lg px-1.5 py-1 border border-primary/10 dark:border-slate-700">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-primary font-extrabold text-lg"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-primary font-extrabold text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 mt-6 shadow-sm">
        <h3 className="font-extrabold mb-3 border-b border-gray-100 dark:border-slate-700 pb-2 text-sm uppercase tracking-wider">Bill Details</h3>
        <div className="space-y-2 text-xs font-medium">
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Item Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-extrabold text-sm pt-2 border-t border-gray-100 dark:border-slate-700 mt-2">
            <span>To Pay</span>
            <span className="text-primary text-base">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* ✅ Changed from fixed to sticky, and rounded all corners to float above the BottomNav */}
      <div className="sticky bottom-2 mt-6 glass border border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-40 rounded-3xl items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Total Pay</p>
          <p className="font-extrabold text-xl leading-none text-primary">₹{total.toFixed(2)}</p>
        </div>
        <button 
          onClick={() => navigate("/checkout")}
          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
        >
          Checkout →
        </button>
      </div>
    </motion.div>
  );
}