// GlobalContext.js
import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const comprarProduto = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      alert("Este produto já está no seu carrinho!");
      return;
    }

    setCart([...cart, product]);
  };
  const removerProduto = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, comprarProduto, removerProduto }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
