import React from "react";
import * as S from "./typewriter.style";
import * as T from "./typewriter.type";
import { useTypeWriter } from "./useTypeWriter";

const Typewriter = ({ textsToWrite }: T.typewriterType) => {
  const { cardSubtitle, selectedSubtitle } = useTypeWriter(textsToWrite);
  return (
    <S.Typewriter aria-label={selectedSubtitle}>{cardSubtitle}</S.Typewriter>
  );
};

export default Typewriter;
