import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  height: fit-content;
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding: 5px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 20px;
`;
