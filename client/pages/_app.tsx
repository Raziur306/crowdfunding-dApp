import type { AppProps } from "next/app";
import { useContext, useEffect } from 'react';
import { ThirdwebProvider, useConnectionStatus } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import theme from '../styles/theme'
import { ThemeProvider } from "@emotion/react";
import { ResponsiveDrawer } from "../components";
import { ContractContext, ContractContextProvider } from "../context/ContractContext";
import { Box } from '@mui/material'


const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ThemeProvider theme={theme}>
        <ContractContextProvider>
          <ResponsiveDrawer >
            <Component {...pageProps} />
          </ResponsiveDrawer>
        </ContractContextProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
