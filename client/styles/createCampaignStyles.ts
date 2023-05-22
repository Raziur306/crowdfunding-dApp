import styled from '@emotion/styled';
import { Button, Box, Typography, TextField, TextareaAutosize, InputLabel, Input } from '@mui/material';
import theme from './theme';

export const StyledBox = styled(Box)({
    backgroundColor: theme.palette.background.paper,
    padding: 25,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyItems: 'center',
    background: '#3B4451',
    gap: 20,
});

export const StyledTitleTypography = styled(Typography)({
    width: '25%',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#585858',
    padding: '10px',
    textAlign: 'center',
    borderRadius: 10,
})

export const StyledFlexBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

})

export const StyledTextField = styled(TextField)({
    width: "100%",
    '& .MuiInputBase-root': {
        color: 'white'
    },
    '& .MuiInputLabel-root': {
        color: 'white'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },

    },
})


export const StyledLargeTextField = styled(TextField)({
    width: "100%",
    '& .MuiInputBase-root': {
        color: 'white'
    },
    '& .MuiInputLabel-root': {
        color: 'white'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },

    },
})

export const StyledBoxCard = styled(Box)({
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'start',
    width: '100%',
    gap: 10,
    background: '#e942f5',
    padding: 25,
    borderRadius: 10,
})

export const StyledInputLable = styled(InputLabel)({
    color: 'white',
    marginBottom: 4,
})


export const StyledFullWidth = styled(Box)({
    width: '100%'
})

export const StyledInput = styled(Input)({
    cursor: 'pointer',
    color: 'white',
})

export const StyledSubmitBtn = styled(Button)({
    color: 'white',
    background: '#66BB6A',
    '&:hover': {
        background: '#66BB6A'
    }
})