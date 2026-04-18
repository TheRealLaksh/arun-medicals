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
    <div className="min-h-screen font-sans bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col relative">
      
      <Navbar />

      {/* Responsive Main Container: Stretches on mobile, centered max-width on desktop */}
      <main className="w-full max-w-4xl mx-auto px-4 pt-4 pb-32 flex-1 flex flex-col relative">
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

      {/* Global Medical Disclaimer - Fixed to the absolute bottom of viewport */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-yellow-500/10 backdrop-blur-md border-t border-yellow-500/30 py-1.5 px-4 z-[60]">
        <p className="text-[10px] text-center text-yellow-700 dark:text-yellow-400 font-bold uppercase tracking-wide">
          ⚠️ Medicines should be taken only after consultation with a doctor.
        </p>
      </div>
    </div>
  );
}