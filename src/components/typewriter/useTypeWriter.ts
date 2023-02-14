import { useEffect, useState } from "react";

enum Phase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_INTERVAL = 150;
const PAUSE_MS = 3000;
const DELETING_INTERVAL = 50;

export const useTypeWriter = (textsToWrite: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [cardSubtitle, setCardSubtitle] = useState("");
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedText = textsToWrite[selectedIndex].slice(
          0,
          cardSubtitle.length + 1
        );

        if (nextTypedText === cardSubtitle) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setCardSubtitle(nextTypedText);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!cardSubtitle) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(textsToWrite[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
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
      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
    }
  }, [cardSubtitle, textsToWrite, phase, selectedIndex]);

  return cardSubtitle;
};
