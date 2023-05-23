import { Box } from '@mui/material'
import React from 'react'
import { StyledFlexColBox, StyledTextTypograhy, StyledTitleTypography } from '../styles/detailsStyle'

function DonationCard({ index, data }) {

    return <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <StyledTextTypograhy>{index + 1} {data.donator}</StyledTextTypograhy>
        <StyledTextTypograhy>{data.donation} ETH</StyledTextTypograhy>
    </Box>
}

export default DonationCard