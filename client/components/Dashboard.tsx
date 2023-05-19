import { Box } from '@mui/material';
import { useConnectionStatus } from '@thirdweb-dev/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Campains, ResponsiveDrawer } from '.';

const Dashboard = () => {
    const handleDrawerSelected = () => {

    }

    return (
        <ResponsiveDrawer onDrawerSelected={handleDrawerSelected}>
            <Campains />
        </ResponsiveDrawer >

    )
}

export default Dashboard