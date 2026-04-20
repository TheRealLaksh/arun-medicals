import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { useCheckoutStore } from "../store/useCheckoutStore";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  const { deliveryMethod, paymentMethod, setDeliveryMethod, setPaymentMethod } = useCheckoutStore();

  const subtotal = cart.reduce((total, item) => {
    const price = item.price - (item.price * item.discount / 100);
    return total + (price * item.quantity);
  }, 0);

  const deliveryFee = deliveryMethod === "home" && subtotal > 0 ? 20 : 0;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    clearCart();
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
      className="pb-28 space-y-5"
    >
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[68px] bg-[var(--bg-color)] z-20 pt-4 -mx-4 px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Checkout</h2>
      </div>

      <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-5">
        
        {/* Contact Details */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Delivery Details</h3>
          <div className="space-y-3">
            <input required type="text" placeholder="Full Name" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium" />
            <input required type="tel" pattern="[0-9]{10}" placeholder="Phone Number (10 digits)" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium" />
            {deliveryMethod === "home" && (
              <textarea required placeholder="Full Address with Landmark" rows="2" className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none font-medium"></textarea>
            )}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Delivery Method</h3>
          <div className="flex gap-3">
            <label className={`flex-1 p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${deliveryMethod === "home" ? "border-primary bg-primary/5 shadow-inner" : "border-gray-100 dark:border-slate-700"}`}>
              <input type="radio" name="delivery" value="home" checked={deliveryMethod === "home"} onChange={(e) => setDeliveryMethod(e.target.value)} className="hidden" />
              <span className="text-2xl drop-shadow-sm">🛵</span>
              <span className="text-[11px] font-extrabold tracking-wide uppercase mt-1">Home</span>
              <span className="text-[10px] text-gray-500 font-bold">+₹20</span>
            </label>
            <label className={`flex-1 p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${deliveryMethod === "pickup" ? "border-primary bg-primary/5 shadow-inner" : "border-gray-100 dark:border-slate-700"}`}>
              <input type="radio" name="delivery" value="pickup" checked={deliveryMethod === "pickup"} onChange={(e) => setDeliveryMethod(e.target.value)} className="hidden" />
              <span className="text-2xl drop-shadow-sm">🏪</span>
              <span className="text-[11px] font-extrabold tracking-wide uppercase mt-1">Pickup</span>
              <span className="text-[10px] text-green-500 font-extrabold">FREE</span>
            </label>
          </div>
        </div>

        {/* Payment Options */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">Payment Method</h3>
          <div className="space-y-2">
            <label className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "online" ? "border-primary bg-primary/5" : "border-gray-100 dark:border-slate-700"}`}>
              <input type="radio" name="payment" value="online" checked={paymentMethod === "online"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-primary" />
              <span className="text-xs font-bold flex-1 uppercase tracking-wide">Pay Online</span>
              <span className="text-xl">💳</span>
            </label>
            <label className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-gray-100 dark:border-slate-700"}`}>
              <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-primary" />
              <span className="text-xs font-bold flex-1 uppercase tracking-wide">Cash on Delivery</span>
              <span className="text-xl">💵</span>
            </label>
          </div>
        </div>
      </form>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-200 dark:border-slate-800 p-4 flex gap-3 z-40 rounded-t-3xl pb-8 sm:pb-4 items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Total Pay</p>
          <p className="font-extrabold text-xl leading-none text-primary">₹{total.toFixed(2)}</p>
        </div>
        <button 
          form="checkout-form"
          type="submit"
          className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-transform active:scale-95 flex items-center gap-2 text-sm"
        >
          Place Order ✓
        </button>
      </div>

    </motion.div>
  );
}