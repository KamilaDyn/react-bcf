import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledBox } from "./Header.style";

const header = [
  { id: 1, name: "Nazwa", size: 5 },
  { id: 2, name: "Ilość", size: 1 },
  { id: 3, name: "Cena regularna", size: 2 },
  { id: 4, name: "Cena promocyjna", size: 2 },
  { id: 5, name: "", size: 1 },
  { id: 6, name: "", size: 1 },
];

const Header = () => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems='center'>
        {header.map(({ name, size, id }) => (
          <Grid item xs={size} key={id}>
            <Typography variant='body1'>{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default Header;
