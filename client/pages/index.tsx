import { useContext } from 'react'
import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import { Campaigns } from "../components";
import theme from "../styles/theme";
import { WalletConnectionContext } from "../context/WalletConnectionContext";

const Home: NextPage = () => {
  const { isWalletConnected } = useContext(WalletConnectionContext)

  if (!isWalletConnected) {
    return (<Box sx={{ width: '100%', height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
      <ConnectWallet btnTitle="Connect Wallet" theme="light" />
    </Box>)
  } else {
    return <Campaigns />
  }

};

export default Home;
