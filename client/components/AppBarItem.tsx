import { Avatar, Box, Button, InputBase } from '@mui/material'
import React from 'react'
import { StyledCamapinBtn, StyledInputBox, StyledInputSearch, StyledSearchIconBtn, StyledAppbarBox } from '../styles/drawerStyles'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const AppBarItem = () => {
    const router = useRouter();
    const handleOnProfileClick = () => {
        router.push('/profile');
    }

    const handleCreateCampaignBtnClick = () => {
        router.push('/create');
    }


    return (
        <StyledAppbarBox>
            <StyledInputBox>
                <StyledInputSearch placeholder='Search for campaign' />
                <StyledSearchIconBtn><SearchIcon /></StyledSearchIconBtn>
            </StyledInputBox>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <StyledCamapinBtn onClick={handleCreateCampaignBtnClick}>Create a Campain</StyledCamapinBtn>
                <Avatar sx={{ cursor: 'pointer' }} onClick={handleOnProfileClick} />
            </Box>

        </StyledAppbarBox>
    )
}

export default AppBarItem