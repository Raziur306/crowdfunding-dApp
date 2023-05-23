import React, { useContext, useEffect } from 'react'
import { Grid, Box, Avatar, Typography } from '@mui/material'
import { StyledAddressTypography, StyledFlexColBox, StyledFlexRowBox, StyledImageBox, StyledTextTypograhy, StyledTitleTypography } from '../styles/detailsStyle'
import { DetailInfoCard } from '../components'
import DonationCard from '../components/DonationCard'
import FundCard from '../components/FundCard'
import { useRouter } from 'next/router'
import { WalletConnectionContext } from '../context/WalletConnectionContext'
import { ContractContext } from '../context/ContractContext'
import { daysLeft } from '../utils'
import { ethers } from 'ethers'

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const { isWalletConnected } = useContext(WalletConnectionContext);
  const { isCampaignDataLoading, allCampaignsData, isDonatorsDataLoading, donatationData, setCampaignId, userCampaign } = useContext(ContractContext);
  const { owner, title, description, target, deadline, amountCollected, image, } = allCampaignsData[id];
  const targetEther = ethers.utils.formatEther(target);
  const dayLeft = daysLeft(deadline.toNumber());


  useEffect(() => {
    setCampaignId(id);
  }, [])




  useEffect(() => {
    if (!isWalletConnected) {
      router.push('/')
    }
  }, [isWalletConnected])


  if (!isWalletConnected) {
    return null;
  }


  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={12} lg={6}>
          <StyledImageBox component="img" alt="The Campain" src={image} />
        </Grid>
        <Grid lg={6} item md={12} >
          <Box sx={{ display: 'flex', gap: 6, justifyContent: 'center', flexDirection: 'column' }}>
            <StyledFlexColBox>
              <StyledTitleTypography variant='h5'>Creator</StyledTitleTypography>
              <StyledFlexRowBox>
                <Avatar />
                <StyledFlexColBox sx={{ gap: '0!important' }}>
                  <StyledAddressTypography>{owner}</StyledAddressTypography>
                  <Typography sx={{ color: 'gray' }}>{userCampaign.length} Campains</Typography>
                </StyledFlexColBox>
              </StyledFlexRowBox>
            </StyledFlexColBox>
            <StyledFlexRowBox>
              <DetailInfoCard value={donatationData.length} desc={"Total Backers"} />
              <DetailInfoCard value={targetEther} desc={`Raised ${targetEther} `} />
              <DetailInfoCard value={dayLeft} desc={"Day Left"} />
            </StyledFlexRowBox>
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={10} container>
        <Grid lg={10} xl={7} item >

          <StyledFlexColBox >
            <StyledTitleTypography variant='h5'>Story</StyledTitleTypography>
            <StyledTextTypograhy>{description}</StyledTextTypograhy>
          </StyledFlexColBox>


          <StyledFlexColBox >
            <StyledTitleTypography variant='h5'>Donation</StyledTitleTypography>
            <Box>
              {donatationData?.map((data, index) => {
                return <DonationCard key={index} index={index} data={data} />
              })}

            </Box>
          </StyledFlexColBox>
        </Grid>
        <Grid lg={10} xl={3} item >
          <FundCard id={id} />
        </Grid>
      </Grid>
    </Box >
  )
}

export default Details