import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

export const Content = styled.p<{ checked: boolean }>`
  font-weight: 500;
  font-family: Poppins;
  word-break: break-all;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export const Check = styled.input`
  margin-right: 10px;
`;

export const TodoOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const BtnOption = styled.button<{ variation: "del" | "edit" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: ${(props) => (props.variation === "del" ? "crimson" : "deepskyblue")};
`;
