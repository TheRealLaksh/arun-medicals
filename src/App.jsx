import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ThemeToggle from "./components/ui/ThemeToggle";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  return (
    <div className="min-h-screen font-sans flex justify-center items-center py-0 sm:py-8">
      {/* Mobile App Container - Now with rounded corners on desktop! */}
      <div className="w-full max-w-[400px] h-[100dvh] sm:h-[850px] bg-[var(--bg-color)] sm:rounded-[2.5rem] sm:shadow-2xl sm:border-[6px] border-gray-800 dark:border-gray-600 relative overflow-hidden flex flex-col">
        
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Navbar />

        {/* Added overflow-y-auto so the scrollbar stays inside the phone */}
        <main className="px-4 pt-2 pb-24 overflow-y-auto flex-1 no-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}