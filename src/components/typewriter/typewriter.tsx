import React from "react";
import * as S from "./typewriter.style";
import * as T from "./typewriter.type";
import { useTypeWriter } from "./useTypeWriter";

const Typewriter = ({ textsToWrite }: T.typewriterType) => {
  const text = useTypeWriter(textsToWrite);
  return <S.Typewriter>{text}</S.Typewriter>;
};

export default Typewriter;
