import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1 0 200px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductContent = styled.div`
  flex: 1;
`;

export const ProductName = styled.h2`
  margin-top: 0;
  color: #333;
`;

export const ProductDescription = styled.p`
  color: #666;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #333;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 8px;
`;

export const BuyButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ButtonContainer = styled.button`
  background-color: #48bb78;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
`;
