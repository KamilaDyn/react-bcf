import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { StyledButton } from "shared/atoms";
import { googleIcon } from "assets";
import { Image } from "./RegisterBySocialMedia.style";

const RegisterBySocialMedia = () => {
  return (
    <Box mb={6}>
      <Box mb={3}>
        <Typography align='center'>lub</Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} container justifyContent='center'>
          <StyledButton
            type='button'
            color='secondary'
            variant='contained'
            google
          >
            <Image src={googleIcon} alt='googleIcon' />
            Zarejestruj przez Google
          </StyledButton>
        </Grid>
        <Grid item xs={12} container justifyContent='center'>
          <StyledButton
            type='button'
            color='secondary'
            variant='contained'
            facebook
          >
            <Image src={googleIcon} alt='googleIcon' />
            Zarejestruj przez Facebook
          </StyledButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterBySocialMedia;
