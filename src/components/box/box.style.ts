import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60vh;
  width: 60%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);

  @media screen and(max-width: 768px ) {
    flex-direction: column;
  } ;
`;
