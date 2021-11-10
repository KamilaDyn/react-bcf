import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Typography variant='h2' align='center'>
        Utwórz nowe konto
      </Typography>
      <Typography variant='subtitle1' align='center'>
        Uzupełnij wszystkie pola
      </Typography>
    </Box>
  );
};

export default Header;
