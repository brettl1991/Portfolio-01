import styled, { keyframes } from "styled-components";

const dash = keyframes`
  from { stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const fadein = keyframes`
  from {opacity: 0;}
  to { opacity: 1;}
`;

export const BackgroundStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;

  background: radial-gradient(
    50% 45.31% at 50% 65.43%,
    #333333 0%,
    #fff0f4 100%
  );

  #line1,
  #line2,
  #line3,
  #line4,
  #line5,
  #line6,
  #line7,
  #line8,
  #line9,
  #line10,
  #line11,
  #line12,
  #line13,
  #line14,
  #line15,
  #line16,
  #line17,
  #stroke1,
  #stroke2,
  #stroke3 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s linear forwards;
  }

  .lines {
    position: absolute;
    width: 1191px;
    height: 958px;
    left: -167px;
    top: -326px;
  }
  .mcircle6 {
    position: absolute;
    left: 1293px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }
  .mcircle5 {
    position: absolute;
    left: 980.5px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }
  .mcircle4 {
    position: absolute;
    left: 692px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }
  .mcircle3 {
    position: absolute;
    left: 441px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }
  .mcircle2 {
    position: absolute;
    left: 306.5px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }
  .mcircle1 {
    position: absolute;
    left: 115px;
    top: -700px;
    opacity: 0;
    animation: ${fadein} 0.5s 3s ease-in-out forwards;
  }

  .circle15 {
    position: absolute;
    left: 416px;
    top: 360px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle14 {
    position: absolute;
    left: 493px;
    top: 344px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle13 {
    position: absolute;
    left: -28px;
    top: 281px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle12 {
    position: absolute;
    left: 561px;
    top: 56px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle11 {
    position: absolute;
    left: 372.5px;
    top: 352px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle10 {
    position: absolute;
    left: 384px;
    top: 37px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle9 {
    position: absolute;
    left: 51px;
    top: 160px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }

  .circle8 {
    position: absolute;
    left: 50.5px;
    top: 37px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle7 {
    position: absolute;
    left: 77.5px;
    top: 58px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle6 {
    position: absolute;
    left: 575.5px;
    top: 94px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle5 {
    position: absolute;
    left: 562.5px;
    top: 202px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle4 {
    position: absolute;
    left: 233.5px;
    top: 10px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle3 {
    position: absolute;
    left: 322.5px;
    top: 319px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .circle2 {
    position: absolute;
    left: 66.5px;
    top: 297px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }

  .circle1 {
    position: absolute;
    left: 11.5px;
    top: 241px;
    opacity: 0;
    animation: ${fadein} 0.5s 2s ease-in-out forwards;
  }
  .stroke3 {
    position: absolute;
    left: 1170px;
    top: -106px;
  }
  .stroke2 {
    position: absolute;
    left: 1008px;
    top: -133px;
  }
  .stroke1 {
    position: absolute;
    left: 273px;
    top: -100px;
  }
  #ring6 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s linear forwards;
  }
  #ring5 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s linear forwards;
  }
  #ring4 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 1000;
    animation: ${dash} 3s linear forwards;
  }
  #ring3 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s linear forwards;
  }
  #ring2 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s 1s linear forwards;
  }
  #ring1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 400;
    animation: ${dash} 3s 0.3s linear forwards;
  }
  .ring6 {
    position: absolute;
    left: 490px;
    top: 134px;
  }
  .ring5 {
    position: absolute;
    left: -82px;
    top: 148px;
  }
  .ring4 {
    position: absolute;
    left: 565px;
    top: -145px;
  }
  .ring3 {
    position: absolute;
    left: 340px;
    top: -100px;
  }
  .ring2 {
    position: absolute;

    top: 5px;
  }
  .ring1 {
    position: absolute;
    left: 88px;
    top: 309px;
  }
`;
