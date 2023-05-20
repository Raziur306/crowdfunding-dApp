import React from 'react'
import { Card, CardMedia, CardContent, Box, Typography, Avatar } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { StyledCard, StyledCardContent, StyledCardMedia, StyledInfoSectionBox, StyledOwnerBox, StyledTypeBox } from '../styles/campainStyles';
import { useRouter } from 'next/router';


function CampainCard() {
    const url = 'https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?b=1&k=20&m=1157655660&s=612x612&w=0&h=ekNZlV17a3wd_yN9PhHXtIabO_zFo4qipCy2AZRpWUI='
    const router = useRouter();
    const handleOnClick = () => {
        router.push('/details');
    }

    return (
        <StyledCard onClick={handleOnClick}>
            <StyledCardMedia image={url} />
            <StyledCardContent>
                <StyledTypeBox>
                    <FolderOutlinedIcon />
                    <Typography>Education</Typography>
                </StyledTypeBox>

                <Typography color={'white'} fontWeight={'bold'} variant='h6'>Build a car from scratch</Typography>
                <Typography color={'gray'}>Sounds Impossible</Typography>
                <StyledInfoSectionBox>
                    <Box sx={{ dipaly: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Typography color={'white'} fontWeight={'bold'}>0.01ETH</Typography>
                        <Typography color='gray' fontWeight={400}>Raise of 0.1</Typography>
                    </Box>
                    <Box sx={{ dipaly: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Typography color={'white'} fontWeight={'bold'}>4</Typography>
                        <Typography color='gray' fontWeight={400}>Day Left</Typography>
                    </Box>
                </StyledInfoSectionBox>
                <StyledOwnerBox>
                    <Avatar />
                    <Typography noWrap>0xxxxxxxxsdfsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Typography>
                </StyledOwnerBox>
            </StyledCardContent>
        </StyledCard>
    )
}

export default CampainCard