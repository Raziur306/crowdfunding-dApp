import { Box } from '@mui/material'
import React from 'react'
import { StyledFlexColBox, StyledTextTypograhy, StyledTitleTypography } from '../styles/detailsStyle'

function DonationCard() {
    return <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <StyledTextTypograhy>1. xxx0XXXXXXx0xxx0xx0x0x0x0x0xx0</StyledTextTypograhy>
        <StyledTextTypograhy>0.1ETH</StyledTextTypograhy>
    </Box>
}

export default DonationCard