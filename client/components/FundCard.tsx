import React, { useState, useContext, useEffect } from 'react'
import { Backdrop, Box, Button, CircularProgress, Typography } from '@mui/material'
import { StyledFundCardBtn, StyledFundTextField, StyledTitleTypography } from '../styles/detailsStyle'
import { StyledBox, StyledSubBox, StyledTextBox, StyledTitle } from '../styles/fundCardStyles'
import { ContractContext } from '../context/ContractContext'

function FundCard(props) {

    const { donateCampaignCall, isDonateLoading } = useContext(ContractContext)

    const [open, setOpenState] = useState(false);
    const [amount, setAmount] = useState('');
    const { id } = props;
    const handleValueChange = (e) => {
        setAmount(e.target.value);
    }

    const handleOnBtnClick = () => {
        if (amount) {
            donateCampaignCall(id, amount);
        }
    }


    useEffect(() => {
        setOpenState(isDonateLoading);
    }, [isDonateLoading])






    return (
        <>

            <StyledBox>
                <StyledTitleTypography>Fund</StyledTitleTypography>
                <StyledSubBox>
                    <StyledTitle>Pledge without reward</StyledTitle>
                    <StyledFundTextField onChange={handleValueChange} value={amount} type='number' placeholder='0.1 ETH' />
                    <StyledTextBox>
                        <Typography>Back it beacuse you believe in it</Typography>
                        <Typography sx={{ color: 'gray' }}>Support the project not for reward. Just beacuse it speak to you.</Typography>
                    </StyledTextBox>
                    <StyledFundCardBtn onClick={handleOnBtnClick}>Fund Campain</StyledFundCardBtn>
                </StyledSubBox>
            </StyledBox>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default FundCard