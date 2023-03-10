import styled from "styled-components";

export const Typewriter = styled.div`
  &.end-cursor:after {
    content: "|";
  }
  &.end-cursor.blinking:after {
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
