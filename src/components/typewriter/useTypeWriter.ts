import { useEffect, useState } from "react";

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_INTERVAL = 150;
const PAUSE_MS = 3000;
const DELETING_INTERVAL = 50;

export const useTypeWriter = (
  textsToWrite: string[]
): {
  cardSubtitle: string;
  selectedSubtitle: string;
  phase: TypePhase;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [cardSubtitle, setCardSubtitle] = useState("");
  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedText = textsToWrite[selectedIndex].slice(
          0,
          cardSubtitle.length + 1
        );

        if (nextTypedText === cardSubtitle) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setCardSubtitle(nextTypedText);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (!cardSubtitle) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(textsToWrite[nextIndex] ? nextIndex : 0);
          setPhase(TypePhase.Typing);
          return;
        }

        const nextRemaining = textsToWrite[selectedIndex].slice(
          0,
          cardSubtitle.length - 1
        );
        const timeout = setTimeout(() => {
          setCardSubtitle(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
    }
  }, [cardSubtitle, textsToWrite, phase, selectedIndex]);

  return { cardSubtitle, phase, selectedSubtitle: textsToWrite[selectedIndex] };
};
