import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import theme from '../styles/theme'
import { ThemeProvider } from "@emotion/react";

const activeChain = ChainId.Mumbai

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
