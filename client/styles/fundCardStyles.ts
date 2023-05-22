import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import theme from './theme';


export const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 3,
});

export const StyledSubBox = styled(Box)({
    fontWeight: 700,
    background: '#373b40',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    gap: 25
});

export const StyledTypographyBox = styled(Box)({
    background: 'black',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
});

export const StyledTextBox = styled(Box)({
    background: 'black',
    color: 'white',
    borderRadius: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 15
});

export const StyledTitle = styled(Typography)({
    color: 'gray',
    textAlign: 'center',
    fontWeight: '700',
})