import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #6B7688;
    background-color: #E8EEF4;
    margin: 0;
    padding: 0;
  }

  input[type="radio"] {
    /* display: none; */

    &:checked + div {
      transform: translateX(0) translateY(16px);
    }
  } 
`;
