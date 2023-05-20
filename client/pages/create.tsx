import { Box, Typography, alertTitleClasses, TextField, Grid, InputLabel, Input } from '@mui/material'
import React from 'react'
import { StyledBox, StyledBoxCard, StyledFlexBox, StyledFullWidth, StyledInput, StyledInputLable, StyledLargeTextField, StyledSubmitBtn, StyledTextArea, StyledTextField, StyledTitleTypography } from '../styles/createCampainStyles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function createCampain() {


  return (
    <StyledBox>
      <StyledTitleTypography variant='h4' >Start Campain 🚀</StyledTitleTypography>
      <Grid container sx={{ justifyContent: "center", width: "100%", }} spacing={2} >
        <Grid md={5.5} item sm={11}>
          <StyledInputLable>Your Name*</StyledInputLable>
          <StyledTextField placeholder='Md Raziur Rahaman Ronju' />
        </Grid>
        <Grid md={5.5} item sm={11}>
          <StyledInputLable>Camapin Title*</StyledInputLable>
          <StyledTextField placeholder='Write a title' />
        </Grid>
        <Grid item xs={11}>
          <StyledInputLable>Story*</StyledInputLable>
          <StyledLargeTextField rows={10} multiline placeholder='Write your story' />
        </Grid>
        <Grid item xs={11}>
          <StyledBoxCard>
            <CurrencyExchangeIcon />
            <Typography sx={{ fontWeight: 'bold' }} variant='h5'>You will get 100% of he raise amount.</Typography>
          </StyledBoxCard>
        </Grid>
        <Grid item md={5.5} sm={11}>
          <StyledInputLable>Goal*</StyledInputLable>
          <StyledTextField placeholder='0.10 ETH' />
        </Grid>
        <Grid item md={5.5} sm={11}>
          <StyledInputLable>Date*</StyledInputLable>
          <StyledTextField type='date' />
        </Grid>
        <Grid item md={11}>
          <StyledInputLable>Camapin Image*</StyledInputLable>
          <StyledInput disableUnderline type='file' />
        </Grid>
      </Grid>
      <StyledSubmitBtn>Submit new campain</StyledSubmitBtn>
    </StyledBox >
  )
}

export default createCampain