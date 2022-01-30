import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { selectors } from 'store';
import { StyledCard } from './SearchCard.style';
import SortBy from 'shared/components/SortBy/SortBy';
const SearchCard = ({ type }) => {
  const foundProducts = useSelector(
    selectors.searchProducts.getSearchedProducts
  );
  return (
    <StyledCard>
      <Grid container spacing={3} display="flex" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Szukaj: {type}</Typography>
          <Typography variant="body1" color="textSecondary">
            Wyników {foundProducts ? foundProducts.length : '0'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="textSecondary">
            Szukaj według:
          </Typography>
          <SortBy type={type} />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default SearchCard;
