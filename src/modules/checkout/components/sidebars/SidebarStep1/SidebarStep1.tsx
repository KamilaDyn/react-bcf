import { FC } from 'react';
import { useSelector } from 'react-redux';
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
import { useManageProducts } from 'shared';
import { StyledCard, StyledButton } from '../../shared';
import { useSidebar } from './SidebarStep1.utils';

const SidebarStep1: FC = () => {
  const { calculatePrice } = useManageProducts();
  const { handleChange, deliveryValue } = useSidebar();
  return (
    <StyledCard>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Total: </Typography>
        <Typography variant="h3" color="secondary">
          {calculatePrice()}
        </Typography>
      </Box>
      <Divider />

      <Field
        fullWidth
        component={TextField}
        name="customernote"
        type="text"
        label="Wiadomość do sprzedawcy"
        placeholder="Wiadomość"
        multiline
        minRows={5}
      />
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
      <StyledButton transparent>Oblicz z dostawą </StyledButton>
    </StyledCard>
  );
};

export default SidebarStep1;
