import styled from "@emotion/styled";
import { Card, CardMedia, CardContent, Box, Typography } from '@mui/material';




export const StyledCard = styled(Card)({
    maxWidth: 345,
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.02)',
    }
})

export const StyledCardMedia = styled(CardMedia)({
    height: 200
})

export const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 8
})

export const StyledTypeBox = styled(Box)({
    display: 'flex',
    color: 'gray',
    flexDirection: 'row',
    gap: 2
})

export const StyledInfoSectionBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
})

export const StyledOwnerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: 3, alignItems: 'center',
    color: 'gray',
    justifyContent: 'start',
    overflow: 'hidden'
});


export const StyledTypographyMaxLine = styled(Typography)({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    color: 'gray',
})