import React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { StyledContainer } from "./Footer.style";

const Footer = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid container item xs={12} sm={7} md={4}>
          <Typography variant="h3">Bazarek</Typography>

          <Typography paragraph color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography variant="h3">O nas</Typography>

          <List component="nav">
            <ListItem>
              <Link href="#">Nasz zespół</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Nasz sklep</Link>
            </ListItem>
            <ListItem href="#">
              <Link href="#">Kariera</Link>
            </ListItem>
            <ListItem href="#">
              <Link href="#">Regulamin</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography variant="h3">Dla Klienta</Typography>

          <List component="nav">
            <ListItem>
              <Link href="#">Pomoc</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Jak kupować</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Zwroty</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={7} md={4}>
          <Typography variant="h3">Kontakt</Typography>
          <List component="nav">
            <ListItem>
              <ListItemText>ul. Poziomkowa 48 11-222 Warszawa</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Email: Bazarek@mail.com </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Telefon:123-456-789</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Footer;
