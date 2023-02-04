"use client";

import Image from "next/image";
import profilePic from "public/profile.png";
import * as S from "./page.style";

export default function Home() {
  return (
    <>
      <S.Main>
        <h3>Welcome to my Portfolio</h3>
        <S.ImgContainer>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </S.ImgContainer>
      </S.Main>
    </>
  );
}
