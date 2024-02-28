import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Components/GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import lux from "../../assets/lux.png";
import ezreal from "../../assets/ezreal.png";
import ahri from "../../assets/ahri.png";
import {
  ButtonContainer,
  BuyButton,
  Imagem,
  ProductCard,
  ProductContainer,
  ProductContent,
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductsWrapper,
  Title,
} from "./Styled";

const ProductPage = () => {
  const { comprarProduto } = useGlobalContext();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Lux Skin",
      description: "Skin Pijama",
      price: 10.99,
      image: lux,
    },
    {
      id: 2,
      name: "Ezreal Skin",
      description: "Skin Pijama",
      price: 19.99,
      image: ezreal,
    },
    {
      id: 3,
      name: "Ahri Skin",
      description: "Guardian Estelar",
      price: 14.99,
      image: ahri,
    },
  ];

  return (
    <ProductContainer>
      <Title>Loja de Skins</Title>
      <ButtonContainer onClick={() => navigate("/cart")}>
        Página de carrinho
      </ButtonContainer>
      <ProductsWrapper>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductContent>
              <Imagem src={product.image} alt="Image" />
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Preço: R$ {product.price.toFixed(2)}</ProductPrice>
            </ProductContent>
            <BuyButton onClick={() => comprarProduto(product)}>
              Comprar
            </BuyButton>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductContainer>
  );
};

export default ProductPage;
