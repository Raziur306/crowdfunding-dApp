import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { CampainCard } from './'

function Campains() {
    return (
        <>
            <Typography sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>All Campains(8)</Typography>
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

export default Campains