import styled from "styled-components";

export const Box = styled.div`
  display: flex;

  justify-content: center;
  height: 50vh;

  width: auto;
  max-width: 900px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    margin: auto 10px;
  }
`;
