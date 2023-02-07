import styled from "styled-components";
import * as T from "./card.type";

export const CardBox = styled.div<T.cardType>`
  transition: 150ms ease-in-out;
  aspect-ratio: ${({ $aspect = "15/21" }: T.cardType) => $aspect};
  min-width: ${({ $minWidth = 100 }: T.cardType) => `${$minWidth}px`};
  background-color: ${({ $color = "blue" }: T.cardType) => $color};
  /* min-width: 480px; // 644 */
  /* height: 100%; */
  inset: 0;

  ${({ $shadow }: T.cardType) =>
    $shadow ? `T.cardType-shadow: 20px 2px 22px hsla(0, 0%, 0%, 0.25);` : ""}

  position: ${({ $position = "relative" }: T.cardType) => $position};

  transform: ${({ $shadow }: T.cardType) =>
    $shadow ? "" : `translateX(0px) translateY(16px);`};

  transform: translateX(-${({ $hide }: T.cardType) => ($hide ? 100 : 0)}%);
  ${({ $overflow }: T.cardType) => ($overflow ? `overflow: hidden;` : "")}
`;

export const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 500%;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
