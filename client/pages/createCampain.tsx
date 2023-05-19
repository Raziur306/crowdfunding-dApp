import { Box, Typography, alertTitleClasses, TextField, Grid, InputLabel, Input } from '@mui/material'
import React from 'react'
import { StyledBox, StyledBoxCard, StyledFlexBox, StyledFullWidth, StyledInput, StyledInputLable, StyledLargeTextField, StyledSubmitBtn, StyledTextArea, StyledTextField, StyledTitleTypography } from '../styles/createCampainStyles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function createCampain() {
  return (
    <StyledBox>
      <StyledTitleTypography variant='h4' >Start Campain 🚀</StyledTitleTypography>
      <Grid container sx={{ justifyContent: "center", gap: 5, }} >
        <Grid item>
          <StyledInputLable>Your Name*</StyledInputLable>
          <StyledTextField placeholder='Md Raziur Rahaman Ronju' />
        </Grid>
        <Grid item>
          <StyledInputLable>Camapin Title*</StyledInputLable>
          <StyledTextField placeholder='Write a title' />
        </Grid>
      </Grid>
      <StyledFullWidth>
        <StyledInputLable>Story*</StyledInputLable>
        <StyledLargeTextField rows={10} multiline sx={{ minWidth: '100%', minHeight: '200px' }} placeholder='Write your story' />
      </StyledFullWidth>
      <StyledBoxCard>
        <CurrencyExchangeIcon />
        <Typography sx={{ fontWeight: 'bold' }} variant='h5'>You will get 100% of he raise amount.</Typography>
      </StyledBoxCard>

      <Grid container sx={{ justifyContent: "center", gap: 5, }} >
        <Grid item>
          <StyledInputLable>Goal*</StyledInputLable>
          <StyledTextField placeholder='0.10 ETH' />
        </Grid>
        <Grid item>
          <StyledInputLable>Date*</StyledInputLable>
          <StyledTextField type='date' />
        </Grid>
      </Grid>

      <StyledFullWidth>
        <StyledInputLable>Camapin Image*</StyledInputLable>
        <StyledInput disableUnderline type='file' />
      </StyledFullWidth>

      <StyledSubmitBtn>Submit new campain</StyledSubmitBtn>
    </StyledBox >
  )
}

export default createCampain