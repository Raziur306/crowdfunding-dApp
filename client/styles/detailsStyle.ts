import styled from "@emotion/styled";
import { Box, Typography, TextField, Button } from '@mui/material'

export const StyledImageBox = styled(Box)({
    borderRadius: 10,
    width: '800px',
    height: "400px",

});



export const StyledCardBox = styled(Box)({
    borderRadius: "10px 10px 0 0",
    width: '150px',
    overflow: 'hidden',
});

export const StyledBoldTypograpy = styled(Typography)({
    minHeight: '80px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    background: '#373b40',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
});

export const StyledTypography = styled(Typography)({
    minHeight: '30px',
    textAlign: "center",
    padding: 12,
    background: '#43474d',
    color: "white",
    fontWeight: '400',
    borderRadius: "0 0 10px 10px"
});


export const StyledFlexColBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: 30
});

export const StyledFlexRowBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',

});

export const StyledAddressTypography = styled(Typography)({
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
});

export const StyledTitleTypography = styled(Typography)({
    textTransform: 'uppercase',
    color: 'white',
    marginTop: 50,
    fontWeight: '500',
});


export const StyledTextTypograhy = styled(Typography)({
    color: 'gray',
    fontWeight: 400,
});

export const StyledFundTextField = styled(TextField)({
    borderRadius: 100,
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
            borderRadius: '10px'
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        }
    }
});

export const StyledFundCardBtn = styled(Button)({
    color: 'white',
    padding: 10,
    background: "#36a382",
    '&:hover': {
        background: "#36a382",
    }
});


//Fund details