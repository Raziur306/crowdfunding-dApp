import { Box, Typography, alertTitleClasses, TextField, Grid, InputLabel, Input, Backdrop, CircularProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { StyledBox, StyledBoxCard, StyledFlexBox, StyledFullWidth, StyledInput, StyledInputLable, StyledLargeTextField, StyledSubmitBtn, StyledTextField, StyledTitleTypography } from '../styles/createCampaignStyles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { WalletConnectionContext } from '../context/WalletConnectionContext';
import { useRouter } from 'next/router';
import { ContractContext } from '../context/ContractContext';

function CreateCampaign() {

  // const { isWalletConnected } = useContext(WalletConnectionContext);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isWalletConnected) {
  //     router.push('/')
  //   }
  // }, [isWalletConnected])

  const [open, setOpenState] = useState(false);


  const [name, setName] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [story, setStory] = useState('');
  const [goal, setGoal] = useState('');
  const [date, setData] = useState('');
  const [imgUrl, setImgUrl] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleCampaignNameChange = (e) => {
    setCampaignName(e.target.value);
  }
  const handleStoryChange = (e) => {
    setStory(e.target.value);
  }
  const handleGoalValueChange = (e) => {
    setGoal(e.target.value);
  }
  const handleDateChange = (e) => {
    setData(e.target.value);
  }

  const handleImageUrlChange = (e) => {
    setImgUrl(e.target.value)
  }



  //create campaign
  const { createCampaignCall, isCreateCampaignLoading } = useContext(ContractContext)
  const handleCreateCampaign = () => {
    if (name && campaignName && story && goal && date && imgUrl) {
      createCampaignCall(campaignName, story, goal, date, imgUrl);
    }
  }

  useEffect(() => {
    setOpenState(isCreateCampaignLoading)
  }, [isCreateCampaignLoading])






  // if (!isWalletConnected) {
  //   return null;
  // }



  return (
    <>
      <StyledBox>
        <StyledTitleTypography variant='h4' >Start Campaign 🚀</StyledTitleTypography>
        <Grid container sx={{ justifyContent: "center", width: "100%", }} spacing={2} >
          <Grid md={5.5} item sm={11}>
            <StyledInputLable>Your Name*</StyledInputLable>
            <StyledTextField onChange={handleNameChange} value={name} placeholder='Md Raziur Rahaman Ronju' />
          </Grid>
          <Grid md={5.5} item sm={11}>
            <StyledInputLable>Camapin Title*</StyledInputLable>
            <StyledTextField onChange={handleCampaignNameChange} value={campaignName} placeholder='Write a title' />
          </Grid>
          <Grid item xs={11}>
            <StyledInputLable>Story*</StyledInputLable>
            <StyledLargeTextField onChange={handleStoryChange} value={story} rows={10} multiline placeholder='Write your story' />
          </Grid>
          <Grid item xs={11}>
            <StyledBoxCard>
              <CurrencyExchangeIcon />
              <Typography sx={{ fontWeight: 'bold' }} variant='h5'>You will get 100% of he raise amount.</Typography>
            </StyledBoxCard>
          </Grid>
          <Grid item md={5.5} sm={11}>
            <StyledInputLable>Goal*</StyledInputLable>
            <StyledTextField type='number' onChange={handleGoalValueChange} value={goal} placeholder='0.10 ETH' />
          </Grid>
          <Grid item md={5.5} sm={11}>
            <StyledInputLable>Date*</StyledInputLable>
            <StyledTextField onChange={handleDateChange} value={date} type='date' />
          </Grid>
          <Grid item md={11}>
            <StyledInputLable>Campaign Image*</StyledInputLable>
            <StyledTextField onChange={handleImageUrlChange} value={imgUrl} placeholder='Enter campaign image url' />
          </Grid>
        </Grid>
        <StyledSubmitBtn onClick={handleCreateCampaign}>Submit new campaign</StyledSubmitBtn>
      </StyledBox >


      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default CreateCampaign