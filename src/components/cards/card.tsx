import Image from "next/image";
import profilePic from "public/profile.png";
import * as S from "./card.style";

import * as T from "./card.type";

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
      {/* <S.Main>
              <S.ImgContainer>
                <Image
                  src={profilePic}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </S.ImgContainer>
            </S.Main> */}
    </S.CardBox>
  );
};

export { Card };
