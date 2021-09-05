import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { StyledCard } from "../atoms";

const PersonalData = () => {

  const personInfo = [
    {
      id: 1,
      key: 'Imię',
      value: 'Kamila'
    },
    {
      id: 2, key: 'Nazwisko',
      value: 'Dynysiuk'
    },
    {
      id: 3, key: 'Email',
      value: 'kamila@mail.com'
    },
    {
      id: 4, key: 'Telefon',
      value: '123456789'
    },
    {
      id: 5, key: 'Data urodzenia',
      value: '01.01.1990'
    }
  ]

  return (
    <StyledCard>
      <Grid container spacing={3} justifyContent='space-between'>
        {personInfo.map((data) => (
          <Grid item xs={6} md={2} key={data.id}>
            <Box display='flex' flexDirection='column'>
              <Typography color='textSecondary'> {data.key} </Typography>
              <span>{data.value}</span>
            </Box>
          </Grid>
        ))}
      </Grid>
    </StyledCard>
  );
};

export default PersonalData;
