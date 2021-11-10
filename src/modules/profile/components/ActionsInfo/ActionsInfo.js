import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { selectors } from "store";
import { StyledCard } from "../atoms";
import { StyledAvatar, ShoppingInfo } from "./ActionsInfo.style";

const actionData = [
  {
    id: 1,
    key: "Zamówienia",
    value: 16,
  },
  {
    id: 2,
    key: "Płatności",
    value: 1,
  },
  {
    id: 3,
    key: "Wysyłka",
    value: 0,
  },
  { id: 4, key: "Odbiór", value: 3 },
];

const ActionsInfo = () => {
  const profile = useSelector(selectors.auth.getProfile);

  return (
    <ShoppingInfo>
      <Grid container spacing={3} justifyContent='space-between'>
        <Grid item xs={12} md={6}>
          <StyledCard userInfo>
            <StyledAvatar alt='Remy Sharp' src=''>
              P
            </StyledAvatar>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
              m={2}
            >
              <div>
                <Typography variant='h5'>{profile.firstName}</Typography>
                <Box display='flex' justifyContent='space-between'>
                  <Typography>Balance:</Typography>
                  <Typography color='primary'>500$</Typography>
                </Box>
              </div>
            </Box>
            <Typography>SILVER USER</Typography>
          </StyledCard>
        </Grid>
        <Grid container item xs={12} md={6} spacing={5}>
          {actionData.map((data) => (
            <Grid item xs={3} key={data.id}>
              <StyledCard>
                <Typography variant='h3' color='primary'>
                  {data.value}
                </Typography>
                <small>{data.key}</small>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ShoppingInfo>
  );
};

export default ActionsInfo;
