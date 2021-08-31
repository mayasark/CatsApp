import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  padding: 10px;
  input {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 200px;
  justify-content: center;
`;

export const Image = styled.img`
  display: flex;
  padding: 10px;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
