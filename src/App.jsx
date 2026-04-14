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
    <div className="min-h-screen font-sans flex justify-center bg-gray-200 dark:bg-black">
      <div className="w-full max-w-md min-h-screen bg-[var(--bg-color)] shadow-2xl relative overflow-x-hidden">
        
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Navbar />

        <main className="px-4 pt-2 pb-24">
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