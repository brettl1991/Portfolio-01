import { DataText, dataText } from "@/data";
import Image from "next/image";
import profilePic from "public/profile.png";
import * as S from "./card.style";

import * as T from "./card.type";
import { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "../typewriter/typewriter";

const Card = ({
  children,
  $aspect,
  $minWidth,
  $color,
  $position,
  $shadow,
  $hide,
  $overflow,
}: T.cardType) => {
  return (
    <S.CardBox
      $aspect={$aspect}
      $minWidth={$minWidth}
      $color={$color}
      $position={$position}
      $shadow={$shadow}
      $hide={$hide}
      $overflow={$overflow}
    >
      {children}

      <S.ImgContainer>
        <Image src={profilePic} alt="Picture of the author" />
      </S.ImgContainer>
      <S.CardSection>
        <Typewriter textsToWrite={dataText.card.subtitle} />

        <div>
          {dataText.card.buttonList.map(({ text, href, download }, idx) => (
            <S.LinkStyle href={href} key={text + idx} download={download}>
              {text.toUpperCase()}
            </S.LinkStyle>
          ))}
        </div>
      </S.CardSection>
    </S.CardBox>
  );
};

export { Card };
