import React, { useEffect, useContext } from 'react'
import { CampaignCard } from '../components'
import { Grid, Typography } from '@mui/material'
import { WalletConnectionContext } from '../context/WalletConnectionContext';
import { useRouter } from 'next/router';
import { ContractContext } from '../context/ContractContext';

function Profile() {
    const { isWalletConnected } = useContext(WalletConnectionContext);
    const router = useRouter();

    useEffect(() => {
        if (!isWalletConnected) {
            router.push('/')
        }
    }, [isWalletConnected])


    const { userCampaign } = useContext(ContractContext);




    if (!isWalletConnected) {
        return null;
    }


    return (
        <>
            <Typography sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>My Campaigns({userCampaign.length})</Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                {
                    userCampaign.map((campaign, index) => {
                        return <CampaignCard key={index} data={campaign?.data} id={campaign?.id} />
                    })
                }
            </Grid>
        </ >
    )
}

export default Profile