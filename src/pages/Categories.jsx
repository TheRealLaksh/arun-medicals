import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../data/medicines";

export default function Categories() {
  return (
    <div className="space-y-6 pb-6 w-full animate-in fade-in duration-300 pt-2">
      <h2 className="text-xl md:text-2xl font-extrabold tracking-tight px-1 text-gray-900 dark:text-white">
        All Categories
      </h2>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={i}
          >
            <Link 
              to={`/category/${cat}`} 
              className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:border-primary hover:shadow-md transition-all h-full"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                💊
              </div>
              <span className="text-[11px] md:text-xs font-bold text-center leading-tight text-gray-800 dark:text-gray-200">
                {cat}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}