import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  // Calculate totals
  const subtotal = cart.reduce((total, item) => {
    const price = item.price - (item.price * item.discount / 100);
    return total + (price * item.quantity);
  }, 0);

  // Delivery fee logic
  const deliveryFee = subtotal > 0 ? 20 : 0; 
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-4">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Looks like you haven't added any medicines yet.</p>
        <Link to="/" className="mt-4 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-colors">
          Browse Medicines
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }}
      className="pb-24 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[72px] bg-[var(--bg-color)] z-20 pt-2">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="space-y-3">
        {cart.map((item, i) => {
          const discountedPrice = item.price - (item.price * item.discount / 100);
          return (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={item.id} 
              className="glass p-3 rounded-2xl flex gap-3 border border-gray-200 dark:border-slate-800"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center p-1">
                <img src={item.images[0]} alt={item.name} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">{item.category}</p>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="font-bold text-sm">₹{discountedPrice * item.quantity}</div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-primary/10 dark:bg-slate-800 rounded-lg px-2 py-1 border border-primary/20 dark:border-slate-700">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-primary font-bold text-lg"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-primary font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bill Details */}
      <div className="glass p-4 rounded-2xl border border-gray-200 dark:border-slate-800 mt-6">
        <h3 className="font-bold mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Bill Details</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Item Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-100 dark:border-slate-700 mt-2">
            <span>To Pay</span>
            <span className="text-primary">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-50 rounded-t-2xl items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Total</p>
          <p className="font-bold text-lg leading-none">₹{total.toFixed(2)}</p>
        </div>
        <button 
          onClick={() => navigate("/checkout")}
          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          Proceed to Pay →
        </button>
      </div>
    </motion.div>
  );
}