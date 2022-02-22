import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 8px;
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  margin-right: 10px;

  :focus {
    outline: none;
  }
`;

export const BtnCheck = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #04f06a;
  cursor: pointer;
`;
