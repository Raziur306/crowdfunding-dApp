import React from 'react'
import { Grid, Box, Avatar, Typography } from '@mui/material'
import { StyledAddressTypography, StyledFlexColBox, StyledFlexRowBox, StyledImageBox, StyledTextTypograhy, StyledTitleTypography } from '../styles/detailsStyle'
import { DetailInfoCard } from '../components'
import DonationCard from '../components/DonationCard'
import FundCard from '../components/FundCard'


function campainDetails() {
  const url = 'https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?b=1&k=20&m=1157655660&s=612x612&w=0&h=ekNZlV17a3wd_yN9PhHXtIabO_zFo4qipCy2AZRpWUI='
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={12} lg={6}>
          <StyledImageBox component="img" alt="The Campain" src={url} />
        </Grid>
        <Grid lg={6} item md={12} >
          <Box sx={{ display: 'flex', gap: 6, justifyContent: 'center' , flexDirection: 'column' }}>
            <StyledFlexColBox>
              <StyledTitleTypography variant='h5'>Creator</StyledTitleTypography>
              <StyledFlexRowBox>
                <Avatar />
                <StyledFlexColBox sx={{ gap: '0!important' }}>
                  <StyledAddressTypography>0xdsdfsdfsdfsadfasdfsdf</StyledAddressTypography>
                  <Typography>10 Campains</Typography>
                </StyledFlexColBox>
              </StyledFlexRowBox>
            </StyledFlexColBox>
            <StyledFlexRowBox>
              <DetailInfoCard />
              <DetailInfoCard />
              <DetailInfoCard />
            </StyledFlexRowBox>
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={10} container>
        <Grid lg={10} xl={7} item >

          <StyledFlexColBox >
            <StyledTitleTypography variant='h5'>Story</StyledTitleTypography>
            <StyledTextTypograhy>A red dog and funny cat.</StyledTextTypograhy>
          </StyledFlexColBox>


          <StyledFlexColBox >
            <StyledTitleTypography variant='h5'>Donation</StyledTitleTypography>
            <Box>
              <DonationCard />
              <DonationCard />
              <DonationCard />
            </Box>
          </StyledFlexColBox>


        </Grid>
        <Grid lg={10} xl={3} item >
          <FundCard />
        </Grid>
      </Grid>
    </Box >
  )
}

export default campainDetails