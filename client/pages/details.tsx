import React from 'react'
import { Grid, Box } from '@mui/material'
import { StyledImageBox } from '../styles/detailsStyle'
import { DetailInfoCard } from '../components'


function campainDetails() {
  const url = 'https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?b=1&k=20&m=1157655660&s=612x612&w=0&h=ekNZlV17a3wd_yN9PhHXtIabO_zFo4qipCy2AZRpWUI='
  return (
    <Grid container>
      <Grid item md={8}>
        <StyledImageBox component="img" alt="The Campain" src={url} />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <DetailInfoCard />
          </Grid>
          <Grid item>
            <DetailInfoCard />
          </Grid>
          <Grid item>
            <DetailInfoCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default campainDetails