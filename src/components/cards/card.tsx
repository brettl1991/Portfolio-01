import Image from "next/image";
import profilePic from "public/profile.png";
import * as S from "./card.style";

const Card = () => {
  return (
    <div>
      <S.CardBox />
      <S.CardBox />
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
    </div>
  );
};

export { Card };
