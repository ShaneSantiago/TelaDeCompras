import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Components/GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  Title,
  ItemContainer,
  Imagem,
  ItemName,
  ItemDescription,
  ItemPrice,
  DeleteButton,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  ButtonContainer,
} from "./Styled";

const Cart = () => {
  const { cart, removerProduto } = useGlobalContext();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContainer>
      <Title>Carrinho</Title>
      {cart.length < 1 ? (
        <p>Carrinho vázio</p>
      ) : (
        <>
          {" "}
          {cart.map((product) => (
            <ItemContainer key={product.id}>
              <Imagem src={product.image} />
              <ItemName>{product.name}</ItemName>
              <ItemDescription>{product.description}</ItemDescription>
              <ItemPrice>Preço: R$ {product.price.toFixed(2)}</ItemPrice>
              <DeleteButton onClick={() => removerProduto(product.id)}>
                Deletar
              </DeleteButton>
            </ItemContainer>
          ))}
        </>
      )}
      <TotalContainer>
        <TotalLabel>Total:</TotalLabel>{" "}
        <TotalAmount>R$ {calculateTotal().toFixed(2)}</TotalAmount>
      </TotalContainer>
      <ButtonContainer onClick={() => navigate("/")}>
        Continuar comprando
      </ButtonContainer>
    </CartContainer>
  );
};

export default Cart;
