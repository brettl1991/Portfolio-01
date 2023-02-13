import styled from "styled-components";
import * as T from "./card.type";

export const CardBox = styled.div<T.cardType>`
  aspect-ratio: ${({ $aspect = "6/9" }: T.cardType) => $aspect};
  /* min-width: ${({ $minWidth = 100 }: T.cardType) => `${$minWidth}px`}; */
  background-color: ${({ $color = "#F06292" }: T.cardType) => $color};
  /* min-width: 480px; // 644 */
  /* height: 100%; */

  ${({ $shadow }: T.cardType) =>
    $shadow ? `T.cardType-shadow: 20px 2px 22px hsla(0, 0%, 0%, 0.25);` : ""}

  position: ${({ $position = "relative" }: T.cardType) => $position};
`;

export const ImgContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100%;

  ::before {
    content: "";
    position: absolute;
    bottom: -50%;
    width: 100%;
    height: 90%;
    background: #fff;
    transform: rotate(12deg);
    left: -25%;
  }

  ::after {
    content: "";
    position: absolute;
    left: auto;
    bottom: -50%;
    width: 100%;
    height: 90%;
    background: #fff;
    right: -25%;
    transform: rotate(-12deg);
  }
`;
