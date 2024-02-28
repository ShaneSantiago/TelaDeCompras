import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const ItemContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`;

export const ItemName = styled.h2`
  margin-top: 0;
`;

export const ItemDescription = styled.p`
  color: #555;
`;

export const ItemPrice = styled.p`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

export const TotalLabel = styled.span`
  font-weight: bold;
`;

export const TotalAmount = styled.span`
  font-weight: bold;
`;

export const ButtonContainer = styled.button`
  background-color: #48bb78;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
`;
