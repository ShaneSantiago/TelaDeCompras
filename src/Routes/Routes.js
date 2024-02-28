import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
