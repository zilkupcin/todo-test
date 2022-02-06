import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#7C5DFA",
    primaryLight: "#9277FF",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spartan', sans-serif;
    font-size: 16px;
    height: 100vh;
    overflow-x: hidden;
  }

  button {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 16px;
  }

  .memory-game {
      display: flex;
      flex-direction: column;
      height: 100vh;
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
