import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import { Dashboard } from "../components";
import theme from "../styles/theme";

const Home: NextPage = () => {
  const connectionStatus = useConnectionStatus();

  if (connectionStatus === 'connected') {
    return <Dashboard />
  } else {
    return (<Box sx={{ width: '100%', height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
      <ConnectWallet btnTitle="Connect Wallet" theme="light" />
    </Box>)
  }

};

export default Home;
