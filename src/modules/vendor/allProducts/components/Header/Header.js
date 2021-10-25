import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { StyledBox } from "./Header.style";

const header = [
  { name: "Nazwa", size: 5 },
  { name: "Ilość", size: 1 },
  { name: "Cena regularna", size: 2 },
  { name: "Cena promocyjna", size: 2 },
  { name: "", size: 1 },
  { name: "", size: 1 },
];

const Header = () => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems='center'>
        {header.map(({ name, size }) => (
          <Grid item xs={size}>
            <Typography variant='body1'>{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default Header;
