import { Box } from '@mui/material';
import { useConnectionStatus } from '@thirdweb-dev/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { ResponsiveDrawer } from '../components';

const home = () => {
    const connectedStatus = useConnectionStatus();
    const router = useRouter();
    useEffect(() => {
        if (connectedStatus == 'disconnected') {
            router.push('/');
        }
    }, [connectedStatus])
    return (
        <Box>
            <ResponsiveDrawer />
        </Box>
    )
}

export default home