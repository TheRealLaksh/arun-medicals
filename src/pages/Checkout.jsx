import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCartStore();
  
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [paymentMethod, setPaymentMethod] = useState("online");

  // Calculate totals
  const subtotal = cart.reduce((total, item) => {
    const price = item.price - (item.price * item.discount / 100);
    return total + (price * item.quantity);
  }, 0);

  const deliveryFee = deliveryMethod === "home" && subtotal > 0 ? 20 : 0;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Clear the cart directly using Zustand's setState
    useCartStore.setState({ cart: [] }); 
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold">No items to checkout</h2>
        <button onClick={() => navigate("/")} className="mt-4 text-primary underline">Go Home</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }}
      className="pb-24 space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[72px] bg-[var(--bg-color)] z-20 pt-2">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Checkout</h2>
      </div>

      <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
        
        {/* Contact Details */}
        <div className="glass p-4 rounded-2xl border border-gray-200 dark:border-slate-800">
          <h3 className="font-bold mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Delivery Details</h3>
          <div className="space-y-3">
            <input required type="text" placeholder="Full Name" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary text-sm" />
            <input required type="tel" placeholder="Phone Number" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary text-sm" />
            {deliveryMethod === "home" && (
              <textarea required placeholder="Full Address with Landmark" rows="2" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary text-sm resize-none"></textarea>
            )}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="glass p-4 rounded-2xl border border-gray-200 dark:border-slate-800">
          <h3 className="font-bold mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Delivery Method</h3>
          <div className="flex gap-3">
            <label className={`flex-1 p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${deliveryMethod === "home" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-slate-700"}`}>
              <input type="radio" name="delivery" value="home" checked={deliveryMethod === "home"} onChange={(e) => setDeliveryMethod(e.target.value)} className="hidden" />
              <span className="text-2xl">🛵</span>
              <span className="text-xs font-bold">Home Delivery</span>
              <span className="text-[10px] text-gray-500">₹20</span>
            </label>
            <label className={`flex-1 p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${deliveryMethod === "pickup" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-slate-700"}`}>
              <input type="radio" name="delivery" value="pickup" checked={deliveryMethod === "pickup"} onChange={(e) => setDeliveryMethod(e.target.value)} className="hidden" />
              <span className="text-2xl">🏪</span>
              <span className="text-xs font-bold">Store Pickup</span>
              <span className="text-[10px] text-green-500 font-bold">Free</span>
            </label>
          </div>
        </div>

        {/* Payment Options */}
        <div className="glass p-4 rounded-2xl border border-gray-200 dark:border-slate-800">
          <h3 className="font-bold mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Payment Method</h3>
          <div className="space-y-2">
            <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${paymentMethod === "online" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-slate-700"}`}>
              <input type="radio" name="payment" value="online" checked={paymentMethod === "online"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-primary" />
              <span className="text-sm font-medium flex-1">Pay Online (UPI/Card)</span>
              <span className="text-xl">💳</span>
            </label>
            <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-slate-700"}`}>
              <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-primary" />
              <span className="text-sm font-medium flex-1">Cash on Delivery</span>
              <span className="text-xl">💵</span>
            </label>
          </div>
        </div>
      </form>

      {/* Sticky Bottom Place Order Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-50 rounded-t-2xl items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Total</p>
          <p className="font-bold text-lg leading-none">₹{total.toFixed(2)}</p>
        </div>
        <button 
          form="checkout-form"
          type="submit"
          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          Place Order
        </button>
      </div>

    </motion.div>
  );
}