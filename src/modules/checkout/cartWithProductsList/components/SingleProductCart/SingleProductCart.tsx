import React, { FC } from 'react';
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NumberInput } from 'shared';
import { useSingleCart } from './SingleProductCart.utils';
import { StyledIconButton, StyledCard } from './SingleProductCart.style';

const SingleProductCart: FC = () => {
  const { shoppingList, increment, decrement, deleteItem } = useSingleCart();
  return (
    <Container>
      {shoppingList.map((item, index) => (
        <StyledCard key={item.id}>
          <Grid container display="flex" alignItems="center" spacing={3}>
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
                <Typography variant="h5" color="textSecondary" marginRight={5}>
                  ${item.itemPrice} x {item.count}
                </Typography>
                <Typography variant="h3" color="primary">
                  ${item.price}
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
          <StyledIconButton onClick={() => deleteItem(item.id)}>
            <Tooltip title="Usuń produkt" placement="top">
              <CloseIcon />
            </Tooltip>
          </StyledIconButton>
        </StyledCard>
      ))}
    </Container>
  );
};

export default SingleProductCart;
