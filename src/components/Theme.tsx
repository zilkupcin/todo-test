import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#7C5DFA",
    primaryLight: "#9277FF",
    primaryDark: "#494E6E",
    greyOne: "#F9FAFE",
    greyTwo: "#DFE3FA",
    greyThree: "#7E88C3",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spartan', sans-serif;
    font-size: 16px;
    height: 100vh;
    overflow-x: hidden;
    background-color: #F8F8FB;
  }

  button {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  #todo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }

  label {
      display: block;
      color: ${theme.colors.greyThree};
      font-size: 0.875rem;
  }

  input {
      padding: 12px;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid ${theme.colors.greyTwo};
      color: ${theme.colors.primaryDark};
      font-family: 'Spartan', sans-serif;
      font-weight: 700;
  }
`;

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
