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
import { selectors } from 'store';
import { useManageProducts } from 'shared';
import { StyledCard, StyledButton } from '../../shared';

enum Options {
  Option1,
  Option2,
  Option3,
}

const SidebarStep1: FC = () => {
  const { calculatePrice } = useManageProducts();
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
            name="radio-buttons-group"
            //   value={values.selectedOption.toString()}
            //   onChange={(event) => {
            //     setFieldValue(name, event.currentTarget.value);
            //   }}
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
