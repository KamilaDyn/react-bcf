import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { CategorySelect } from '../../components';

const Menu: FC = () => {
  return (
    <Box px={10} mb={5}>
      <Grid container spacing={3}>
        <Grid item xs={11} sm={5}>
          <CategorySelect />
        </Grid>
        <Grid item xs={11} sm={5}></Grid>
      </Grid>
    </Box>
  );
};

export default Menu;
