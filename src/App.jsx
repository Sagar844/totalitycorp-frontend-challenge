import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CartPage from "./Pages/CartPage";
import { ProductsPages } from "./Pages/ProductsPages";
import { CartProvider } from "./Provider/CartProvider";
import ProductstDetail from "./Pages/ProductstDetail";
import { useState } from "react";

function App() {


  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route index element={<ProductsPages />}></Route>
          <Route path="/products/:id" element={<ProductstDetail />}></Route>
          <Route path="/products/cart" element={<CartPage />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
