import React from "react";
import {Box, Grid, Typography } from "@material-ui/core";
import { StyledCard } from "../atoms";

const PersonalData = () => {

  return (
    <StyledCard>
      <Grid container spacing={3} justifyContent='space-between'>
        <Grid item xs={2}>
          <Box display='flex' flexDirection='column'>
            <Typography color='textSecondary'> Imię </Typography>
            <span>Kamila</span>
          </Box>
        </Grid>
        <Grid item xs={2}>
        <Box display='flex' flexDirection='column'>
            <Typography color='textSecondary'> Nazwisko </Typography>
            <span>Dynysiuk</span>
          </Box>
        </Grid>
        <Grid item xs={2}>
        <Box display='flex' flexDirection='column'>
            <Typography color='textSecondary'> Email </Typography>
            <span>kamila@mail.com</span>
          </Box>
        </Grid>
        <Grid item xs={2}>
        <Box display='flex' flexDirection='column'>
            <Typography color='textSecondary'> Telefon </Typography>
            <span>12345678</span>
          </Box>
        </Grid>
        <Grid item xs={2}>
        <Box display='flex' flexDirection='column'>  
             <Typography color='textSecondary'> Data urodzenia </Typography>
            <span>01.01.1980</span>
          </Box>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default PersonalData;
