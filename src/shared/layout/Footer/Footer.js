import React from "react";
import { Grid, Link, List, ListItem, Typography } from "@mui/material";
import { StyledContainer } from "./Footer.style";
import {
  listLinkAboutUs,
  listLinkForClient,
  listItemContact,
} from "./Footer.utils";

const Footer = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid container item xs={12} sm={7} md={4}>
          <Typography variant='h3'>Bazarek</Typography>

          <Typography paragraph color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography variant='h3'>O nas</Typography>

          <List component='nav'>
            {listLinkAboutUs.map((value) => (
              <ListItem key={value}>
                <Link href='#' underline='none' color='textSecondary'>
                  {value}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography variant='h3'>Dla Klienta</Typography>

          <List component='nav'>
            {listLinkForClient.map((value) => (
              <ListItem key={value}>
                <Link href='#' underline='none' color='textSecondary'>
                  {value}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={7} md={4}>
          <Typography variant='h3'>Kontakt</Typography>
          <List component='nav'>
            {listItemContact.map((value) => (
              <ListItem key={value} color='textSecondary'>
                <Typography color='textSecondary'>{value}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Footer;
