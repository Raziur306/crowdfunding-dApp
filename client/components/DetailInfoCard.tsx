import React from 'react'
import { Box, Typography } from '@mui/material'
import { StyledBoldTypograpy, StyledCardBox, StyledTypography } from '../styles/detailsStyle'

function DetailInfoCard(props: any) {
    const { value, desc } = props

    return (
        <StyledCardBox>
            <StyledBoldTypograpy variant="h4">{value}</StyledBoldTypograpy>
            <StyledTypography>{desc}</StyledTypography>
        </StyledCardBox>
    )
}

export default DetailInfoCard