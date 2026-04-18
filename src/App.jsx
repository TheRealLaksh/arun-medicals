import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  return (
    <div className="min-h-screen font-sans flex justify-center items-center py-0 sm:py-8 bg-[var(--bg-color)]">
      <div className="w-full max-w-[400px] h-[100dvh] sm:h-[850px] bg-[var(--bg-color)] sm:rounded-[2.5rem] sm:shadow-2xl sm:border-[6px] border-gray-800 dark:border-gray-600 relative overflow-hidden flex flex-col">
        
        {/* Navbar now handles the Theme Toggle internally */}
        <Navbar />

        <main className="px-4 pt-2 pb-32 overflow-y-auto flex-1 no-scrollbar relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        
        <BottomNav /> 

        {/* Global Medical Disclaimer */}
        <div className="absolute bottom-0 w-full bg-yellow-500/10 backdrop-blur-md border-t border-yellow-500/30 py-1.5 px-4 z-50">
          <p className="text-[10px] text-center text-yellow-700 dark:text-yellow-400 font-bold uppercase tracking-wide">
            ⚠️ Medicines should be taken only after consultation with a doctor.
          </p>
        </div>
      </div>
    </div>
  );
}