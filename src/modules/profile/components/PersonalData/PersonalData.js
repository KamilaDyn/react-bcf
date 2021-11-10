import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { selectors } from "store";
import { StyledCard } from "../atoms";

const PersonalData = () => {
  const profile = useSelector(selectors.auth.getProfile);
  const personInfo = [
    {
      id: 1,
      key: "Imię",
      value: profile.firstName,
    },
    {
      id: 2,
      key: "Nazwisko",
      value: profile.secondName,
    },
    {
      id: 3,
      key: "Email",
      value: profile.email,
    },
    {
      id: 4,
      key: "Telefon",
      value: profile.phone,
    },
    {
      id: 5,
      key: "Data urodzenia",
      value: "01.01.1990",
    },
  ];
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
