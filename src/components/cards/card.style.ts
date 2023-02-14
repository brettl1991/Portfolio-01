import Link from "next/link";
import styled from "styled-components";
import * as T from "./card.type";

export const CardBox = styled.div<T.cardType>`
  aspect-ratio: ${({ $aspect = "5/9" }: T.cardType) => $aspect};
  /* min-width: ${({ $minWidth = 100 }: T.cardType) => `${$minWidth}px`}; */
  background-color: ${({ $color = "#fff" }: T.cardType) => $color};
  /* min-width: 480px; // 644 */
  /* height: 100%; */

  ${({ $shadow }: T.cardType) =>
    $shadow ? `T.cardType-shadow: 20px 2px 22px hsla(0, 0%, 0%, 0.25);` : ""}

  position: ${({ $position = "relative" }: T.cardType) => $position};
`;

export const ImgContainer = styled.div`
  width: 100%;

  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    bottom: -85%;
    width: 100%;
    height: 90%;
    background: #fff;
  }
  ::before {
    transform: rotate(12deg);
    left: -25%;
  }

  ::after {
    left: auto;
    right: -25%;
    transform: rotate(-12deg);
  }
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 0.5rem;
  font-weight: 400;
  padding: 0.5rem;

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
`;

export const LinkStyle = styled(Link)`
  width: 100%;
  font-size: 0.5rem;
  color: #323232;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
`;
