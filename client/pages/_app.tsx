import type { AppProps } from "next/app";
import { useContext, useEffect } from 'react';
import { ThirdwebProvider, useConnectionStatus } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import theme from '../styles/theme'
import { ThemeProvider } from "@emotion/react";
import { ResponsiveDrawer } from "../components";
import {WalletConnectionContextProvider } from "../context/WalletConnectionContext";
import { Box } from '@mui/material'


const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ThemeProvider theme={theme}>
        <WalletConnectionContextProvider>
          <ResponsiveDrawer >
            <Component {...pageProps} />
          </ResponsiveDrawer>
        </WalletConnectionContextProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
