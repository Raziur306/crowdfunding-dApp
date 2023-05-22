import React from 'react'
import { CampainCard } from '../components'
import { Grid, Typography } from '@mui/material'

function profile() {
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

export default profile