import React from 'react'
import { Box, Typography } from '@mui/material'
import { StyledBoldTypograpy, StyledCardBox, StyledTypography } from '../styles/detailsStyle'

function DetailInfoCard() {
    return (
        <StyledCardBox>
            <StyledBoldTypograpy variant="h4">6</StyledBoldTypograpy>
            <StyledTypography>Day Left</StyledTypography>
        </StyledCardBox>
    )
}

export default DetailInfoCard