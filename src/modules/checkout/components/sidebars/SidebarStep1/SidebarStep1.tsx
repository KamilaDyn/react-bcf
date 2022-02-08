import { FC } from 'react';
import {
  Box,
  Typography,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledButton } from '../../shared';
import { useSidebar } from './SidebarStep1.utils';

const SidebarStep1: FC = () => {
  const {
    applyVoucher,
    isVoucherUsed,
    finalPrice,
    raisePriceByDelivery,
    handleChange,
    deliveryValue,
  } = useSidebar();

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Razem: </Typography>
        <Typography variant="h3" color="secondary">
          {finalPrice}
        </Typography>
      </Box>
      {isVoucherUsed && (
        <Box my={3}>
          <Typography>Kod rabatowy w kwocie 150$ dodany </Typography>
        </Box>
      )}
      <Divider />

      <Field
        fullWidth
        component={TextField}
        name="customerNote"
        type="text"
        label="Wiadomość do sprzedawcy"
        placeholder="Wiadomość"
        multiline
        minRows={5}
      />
      <Box my={3}>
        <Field
          fullWidth
          component={TextField}
          name="voucher"
          type="text"
          label="Kod rabatowy"
          placeholder="Kod rabatowy"
        />
        <StyledButton
          transparent
          onClick={applyVoucher}
          disabled={isVoucherUsed}
        >
          Wykorzystaj rabat
        </StyledButton>
      </Box>
      <Box mt={3} display="flex" flexDirection="column">
        <FormControl component="fieldset">
          <FormLabel component="legend">Wybierz sposób dostawy</FormLabel>
          <RadioGroup
            aria-label="delivery"
            name="deliveryType"
            value={deliveryValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="dpd"
              control={<Radio />}
              label="DPD - 15$"
            />
            <FormControlLabel
              value="ups"
              control={<Radio />}
              label="UPS -20$"
            />
            <FormControlLabel
              value="pickUpFromShop"
              control={<Radio />}
              label="Odbiór w sklepie - Free"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <StyledButton transparent onClick={raisePriceByDelivery}>
        OBLICZ DOSTAWĘ
      </StyledButton>
    </>
  );
};

export default SidebarStep1;
