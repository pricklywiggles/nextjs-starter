import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
