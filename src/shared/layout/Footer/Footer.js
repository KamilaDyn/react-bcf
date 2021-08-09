import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { StyledContainer, StyledLink } from "./Footer.style";

const Footer = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid xs={6} sm={4}>
          <Typography variant="h3">Bazarek</Typography>

          <Typography paragraph color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Typography>
        </Grid>
        <Grid xs={6} sm={2}>
          <Typography variant="h3">O nas</Typography>

          <List component="nav">
            <ListItem>
              <StyledLink href="#">Nasz zespół</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#">Nasz sklep</StyledLink>
            </ListItem>
            <ListItem href="#">
              <StyledLink href="#">Kariera</StyledLink>
            </ListItem>
            <ListItem href="#">
              <StyledLink href="#">Regulamin</StyledLink>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={6} sm={2}>
          <Typography variant="h3">Dla Klienta</Typography>

          <List component="nav">
            <ListItem>
              <StyledLink href="#">Pomoc</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#">Jak kupować</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#">Zwroty</StyledLink>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={6} sm={4}>
          <Typography variant="h3">Kontakt</Typography>
          <List component="nav">
            <ListItem>
              <ListItemText color="primary">
                ul. Poziomkowa 48 11-222 Warszawa
              </ListItemText>
            </ListItem>
            <ListItem>Email: Bazarek@mail.com</ListItem>
            <ListItem>Telefon:123-456-789</ListItem>
          </List>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Footer;
