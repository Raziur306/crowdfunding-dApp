import styled from "@emotion/styled";
import { Box, Button, Drawer, InputBase, MenuItem, IconButton } from '@mui/material';
import theme from "./theme";


//icons button
export const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    color: 'white',
    '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
    },
    '&.Mui-selected': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
        ':hover': {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.secondary.light
        }
    }
})


//custom drawer
export const StyledCustomDrawer = styled(Drawer)({
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(155, 155, 155, 0.5) rgba(255, 255, 255, 0.2)',
    '& .MuiPaper-root::-webkit-scrollbar': {
        width: '6px',
    },
    '& .MuiPaper-root::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    '& .MuiPaper-root::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(155, 155, 155, 0.5)',
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: 'rgba(155, 155, 155, 0.7)',
        },
    },
});

export const StyledInputSearch = styled(InputBase)({
    color: 'white',
    width: '15vw',
    paddingLeft: 10,
    paddingRight: 5,
});

export const StyledInputBox = styled(Box)({
    background: theme.palette.primary.light,
    borderRadius: 50,
    padding: 8,
    paddingRight: 15,
})

export const StyledSearchIconBtn = styled(IconButton)({
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    }

})



export const StyledCamapinBtn = styled(Button)({
    color: 'white',
    background: theme.palette.secondary.main,
    '&:hover': {
        background: theme.palette.secondary.light,
    }

});


export const StyledAppbarBox = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

