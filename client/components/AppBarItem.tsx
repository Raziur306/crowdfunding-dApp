import { Box, Button, InputBase } from '@mui/material'
import React from 'react'
import { StyledCamapinBtn, StyledInputBox, StyledInputSearch, StyledSearchIconBtn } from '../components/drawerStyle'
import SearchIcon from '@mui/icons-material/Search';
const AppBarItem = () => {


    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <StyledInputBox>
                <StyledInputSearch placeholder='Search for campain' />
                <StyledSearchIconBtn><SearchIcon /></StyledSearchIconBtn>
            </StyledInputBox>

            <StyledCamapinBtn>Create a Campain</StyledCamapinBtn>

        </Box>
    )
}

export default AppBarItem