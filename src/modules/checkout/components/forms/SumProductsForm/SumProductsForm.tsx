import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Grid, Typography, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { selectors } from 'store';
import { NumberInput, useManageProducts } from 'shared';
import { ProductsTypes } from '../../shared';
import { SidebarStep1 } from '../../sidebars';
import { StyledCard, StyledIconButton } from './SumProductsForm.style';

const SumProductsForm: FC = () => {
  const products = useSelector(selectors.shoppingList.getShoppingList);
  const { increment, decrement, handleDelete } = useManageProducts();
  return (
    <>
      <Grid
        container
        spacing={5}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginY={10}
      >
        <Grid item xs={12} md={8}>
          {products.length  &&
            products.map((item: ProductsTypes) => (
              <StyledCard>
                <Grid item spacing={2} container alignItems="center">
                  <Grid
                    container
                    item
                    xs={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      alt={item.name}
                      src={item.img}
                      variant="square"
                      sx={{ width: 60, height: 60 }}
                    />
                  </Grid>
                  <Grid xs={5} marginY={10}>
                    <Typography variant="h4" pb={10}>
                      {item.name}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        marginRight={5}
                      >
                        ${item.itemPrice.toFixed(2)} x {item.count}
                      </Typography>
                      <Typography variant="h3" color="primary">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <NumberInput
                        item={item}
                        quantity={item.count}
                        increment={increment}
                        decrement={decrement}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <StyledIconButton onClick={() => handleDelete(item.id)}>
                  <Tooltip title="Usuń produkt" placement="top">
                    <CloseIcon />
                  </Tooltip>
                </StyledIconButton>
              </StyledCard>
            ))}
        </Grid>
        <Grid item xs={10} md={4}>
          <SidebarStep1 />
        </Grid>
      </Grid>
    </>
  );
};

export default SumProductsForm;
