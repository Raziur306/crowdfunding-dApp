import { Backdrop, Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CampaignCard } from '.'
import { ContractContext } from '../context/ContractContext'

const Campains = () => {

    const [open, setOpenState] = useState(false);
    const { isCampaignDataLoading, allCampaignsData } = useContext(ContractContext);

    return (
        <>
            <Typography sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>All Campains(8)</Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>

                {allCampaignsData?.map((campaign: any, index: number) => {
                    return <CampaignCard id={index} data={campaign} key={index} />
                })}
            </Grid >


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </ >
    )
}

export default Campains