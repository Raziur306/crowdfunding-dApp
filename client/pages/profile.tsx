import React, { useEffect, useContext } from 'react'
import { CampainCard } from '../components'
import { Grid, Typography } from '@mui/material'
import { WalletConnectionContext } from '../context/WalletConnectionContext';
import { useRouter } from 'next/router';

function Profile() {

    const { isWalletConnected } = useContext(WalletConnectionContext);
    const router = useRouter();

    useEffect(() => {
        if (!isWalletConnected) {
            router.push('/')
        }
    }, [isWalletConnected])

    if (!isWalletConnected) {
        return null;
    }



    return (
        <>
            <Typography sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>My Campains(8)</Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
                <Grid item>
                    <CampainCard />
                </Grid>
            </Grid>
        </ >
    )
}

export default Profile