import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { StyledCard } from "../atoms";
import { DetailsBox} from "./PersonalData.style";

const PersonalData = () => {
  return (
    <StyledCard>
      <Grid container spacing={3} justifyContent='space-between'>
        <Grid item xs={2}>
          <DetailsBox>
            <Typography color='textSecondary'> Imię </Typography>
            <span>Kamila</span>
          </DetailsBox>
        </Grid>
        <Grid item xs={2}>
          <DetailsBox>
            <Typography color='textSecondary'> Nazwisko </Typography>
            <span>Dynysiuk</span>
          </DetailsBox>
        </Grid>
        <Grid item xs={2}>
          <DetailsBox>
            <Typography color='textSecondary'> Email </Typography>
            <span>kamila@mail.com</span>
          </DetailsBox>
        </Grid>
        <Grid item xs={2}>
          <DetailsBox>
            <Typography color='textSecondary'> Telefon </Typography>
            <span>12345678</span>
          </DetailsBox>
        </Grid>
        <Grid item xs={2}>
          <DetailsBox>
            <Typography color='textSecondary'> Data urodzenia </Typography>
            <span>01.01.1980</span>
          </DetailsBox>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default PersonalData;
