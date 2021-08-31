import React from 'react';
import {Box,Grid, Typography} from '@material-ui/core';
import { StyledCard } from '../atoms';
import {StyledAvatar,  ShoppingInfo } from './ActionsInfo.style';


const ActionsInfo =()=>{
    return(
        <ShoppingInfo>
        <Grid container spacing={3} justifyContent='space-between' >
          <Grid  item xs={12} md={6} >
            <StyledCard userInfo>
              <StyledAvatar alt='Remy Sharp' src=''>
                P
              </StyledAvatar>
              <Box display='flex' flexDirection='column' justifyContent="space-between" m={2}>
                <div>
                  <Typography variant='h5'>Imię użytkownika </Typography>
                  <Box display='flex'  justifyContent="space-between">
                    <Typography>Balance:</Typography>
                    <Typography color='primary'>500$</Typography>
                  </Box>
                </div>
              </Box>
              <Typography>SILVER USER</Typography>
            </StyledCard>
          </Grid>
          <Grid container item xs={16} md={6} spacing={5}>
            <Grid item xs={3}>
              <StyledCard>
                <Typography variant='h3' color='primary'>
                  16
                </Typography>
                <small>Zamówienia</small>
              </StyledCard>
            </Grid>
            <Grid item xs={3}>
              <StyledCard>
                <Typography variant='h3' color='primary'>
                  01
                </Typography>
                <small> Płatności</small>
              </StyledCard>
            </Grid>
            <Grid item xs={3}>
              <StyledCard>
                <Typography variant='h3' color='primary'>
                  00
                </Typography>
                <small>Wysyłka</small>
              </StyledCard>
            </Grid>
            <Grid item xs={3}>
              <StyledCard>
                <Typography variant='h3' color='primary'>
                  03
                </Typography>
                <small>Odbiór</small>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
      </ShoppingInfo>
    )
}

export default ActionsInfo;