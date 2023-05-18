import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const connectedStatus = useConnectionStatus();
  const router = useRouter();
  useEffect(() => {
    if (connectedStatus == 'connected') {
      router.push('/home');
    }
  }, [connectedStatus]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ConnectWallet btnTitle="Connect Wallet" theme="light" />
    </Box>
  )
};

export default Home;
