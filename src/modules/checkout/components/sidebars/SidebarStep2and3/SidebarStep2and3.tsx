import { FC } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSidebarStep2and3 } from './SidebarStep2and3.utils';

const SidebarStep2and3: FC = () => {
  const { shoppingProductsPrice, finalPrice, deliveryPrice, isVoucherUsed } =
    useSidebarStep2and3();

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Cena za produkty: </Typography>
        <Typography variant="h3" color="secondary">
          {shoppingProductsPrice}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Wysyłka:</Typography>
        <Typography variant="h3" color="secondary">
          {deliveryPrice().toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Rabat:</Typography>
        <Typography variant="h3" color="secondary">
          {isVoucherUsed ? 150.0 : (0.0).toFixed(2)}
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">Razem: </Typography>
        <Typography variant="h3" color="secondary">
          {finalPrice}
        </Typography>
      </Box>
    </>
  );
};

export default SidebarStep2and3;
