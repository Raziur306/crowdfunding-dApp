import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { StyledFundCardBtn, StyledFundTextField, StyledTitleTypography } from '../styles/detailsStyle'
import { StyledBox, StyledSubBox, StyledTextBox, StyledTitle } from '../styles/fundCardStyles'

function FundCard() {
    return (
        <StyledBox>
            <StyledTitleTypography>Fund</StyledTitleTypography>
            <StyledSubBox>
                <StyledTitle>Pledge without reward</StyledTitle>
                <StyledFundTextField type='number' placeholder='0.1 ETH' />
                <StyledTextBox>
                    <Typography>Back it beacuse you believe in it</Typography>
                    <Typography sx={{ color: 'gray' }}>Support the project not for reward. Just beacuse it speak to you.</Typography>
                </StyledTextBox>
                <StyledFundCardBtn>Fund Campain</StyledFundCardBtn>
            </StyledSubBox>
        </StyledBox>
    )
}

export default FundCard