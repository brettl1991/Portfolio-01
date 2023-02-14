import styled from "styled-components";

export const Typewriter = styled.div`
  ::after {
    content: "|";
    font-weight: 300;
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
