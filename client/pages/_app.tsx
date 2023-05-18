import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import theme from '../styles/theme'
import { ThemeProvider } from "@emotion/react";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
