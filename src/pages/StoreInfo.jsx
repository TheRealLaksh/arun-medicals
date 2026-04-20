import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function StoreInfo() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }}
      className="pb-28 space-y-5"
    >
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-slate-800 sticky top-[68px] bg-[var(--bg-color)] z-20 pt-4 -mx-4 px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 flex items-center justify-center glass rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Store Information</h2>
      </div>

      <div className="space-y-5 pt-2">
        
        {/* Title Section */}
        <div className="text-center space-y-2 mt-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
            🏥
          </div>
          <h1 className="text-2xl font-extrabold">Arun Medicals</h1>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-md font-bold text-sm">4.4 ⭐ Reviews</span>
          </div>
        </div>

        {/* Map & Contact */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden mt-6">
          <div className="w-full h-40 bg-gray-200 dark:bg-slate-700 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://placehold.co/600x400/e2e8f0/64748b?text=Map+View')] bg-cover bg-center"></div>
            <span className="text-4xl z-10 drop-shadow-md relative -top-2 animate-bounce">📍</span>
          </div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
            C.14/175-2, Sonia Road, Amar Nagar, Varanasi, Uttar Pradesh 221010
          </p>
          <div className="flex gap-3">
            <a href="https://maps.google.com/?q=Arun+Medicals,Varanasi" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary/10 text-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors">
              🗺️ Directions
            </a>
            <a href="tel:+917607790469" className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-primary/30 hover:bg-blue-600 transition-colors">
              📞 +91 7607790469
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2 text-primary">
            🕒 Opening Hours
          </h3>
          <div className="space-y-2 text-sm font-medium">
            <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
              <span>Monday - Saturday</span>
              <span className="font-bold text-gray-900 dark:text-white">7:00 AM - 10:30 PM</span>
            </div>
            <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
              <span>Sunday</span>
              <span className="font-bold text-gray-900 dark:text-white">7:00 AM - 3:00 PM</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-2 border-b border-gray-100 dark:border-slate-700 pb-2 text-primary">
            ℹ️ Description
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            Arun Medicals is a pharmacy located in the heart of Varanasi, offering a range of medical supplies and services to the local community. It is known for its reliable stock of medicines and customer-friendly approach.
          </p>
        </div>

        {/* Services & Offerings */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2 text-primary">
            🩺 Services and Offerings
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>Provides a variety of <strong className="text-gray-800 dark:text-gray-100">Allopathic medicines</strong> and health-related products.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>Maintains a <strong className="text-gray-800 dark:text-gray-100">reliable inventory</strong> to meet the needs of regular and emergency customers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>Offers <strong className="text-gray-800 dark:text-gray-100">convenient access</strong> to essential medicines in a busy urban area.</span>
            </li>
          </ul>
        </div>

        {/* Community Presence */}
        <div className="glass p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-sm uppercase tracking-wider mb-3 border-b border-gray-100 dark:border-slate-700 pb-2 text-primary">
            🤝 Community Presence
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>Serves as a trusted <strong className="text-gray-800 dark:text-gray-100">healthcare resource</strong> for residents in the Amar Nagar and Sonia Road areas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>Known for <strong className="text-gray-800 dark:text-gray-100">consistent service</strong> and availability of quality medicines.</span>
            </li>
          </ul>
        </div>

      </div>
    </motion.div>
  );
}