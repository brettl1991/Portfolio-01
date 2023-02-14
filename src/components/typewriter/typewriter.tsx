import React from "react";
import * as S from "./typewriter.style";
import * as T from "./typewriter.type";
import { TypePhase, useTypeWriter } from "./useTypeWriter";
import cn from "classnames";

const Typewriter = ({ textsToWrite }: T.typewriterType) => {
  const { cardSubtitle, selectedSubtitle, phase } = useTypeWriter(textsToWrite);
  return (
    <S.Typewriter
      className={cn({
        ["end-cursor"]: phase !== TypePhase.Deleting,
        ["blinking"]: phase === TypePhase.Pausing,
      })}
      aria-label={selectedSubtitle}
    >
      {cardSubtitle}
    </S.Typewriter>
  );
};

export default Typewriter;
