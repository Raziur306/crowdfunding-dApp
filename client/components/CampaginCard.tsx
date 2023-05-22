import React from 'react'
import { Grid, CardMedia, CardContent, Box, Typography, Avatar } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { StyledCard, StyledCardContent, StyledCardMedia, StyledInfoSectionBox, StyledOwnerBox, StyledTypeBox, StyledTypographyMaxLine } from '../styles/campaignStyles';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { daysLeft } from '../utils';


function CampaignCard(props: any) {


    const { id } = props;
    const { owner, title, description, target, deadline, amountCollected, image, } = props.data;
    const targetEther = ethers.utils.formatEther(target);
    const dayLeft = daysLeft(deadline.toNumber());



    const router = useRouter();
    const handleOnClick = () => {
        router.push(`/details?id=${id}`);
    }


    return (
        <Grid item>
            <StyledCard onClick={handleOnClick}>
                <StyledCardMedia image={image} />
                <StyledCardContent>
                    <StyledTypeBox>
                        <FolderOutlinedIcon />
                        <Typography>Education</Typography>
                    </StyledTypeBox>

                    <Typography color={'white'} fontWeight={'bold'} variant='h6'>{title}</Typography>
                    <StyledTypographyMaxLine>{description}</StyledTypographyMaxLine>
                    <StyledInfoSectionBox>
                        <Box sx={{ dipaly: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography color={'white'} fontWeight={'bold'}>{targetEther}ETH</Typography>
                            <Typography color='gray' fontWeight={400}>Raise of 0.1</Typography>
                        </Box>
                        <Box sx={{ dipaly: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography color={'white'} fontWeight={'bold'}>{dayLeft}</Typography>
                            <Typography color='gray' fontWeight={400}>Day Left</Typography>
                        </Box>
                    </StyledInfoSectionBox>
                    <StyledOwnerBox>
                        <Avatar />
                        <Typography noWrap>{owner}</Typography>
                    </StyledOwnerBox>
                </StyledCardContent>
            </StyledCard>
        </Grid>
    )
}

export default CampaignCard