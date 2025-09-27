import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  input:not([type="range"]):focus, select:focus {
    outline: 2px solid ${({ theme }) => theme.colors.textPrimary};
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;