import { FC } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledButton } from '../../../shared';

enum Options {
  Option1,
  Option2,
  Option3,
}
const AdditionalInfoForm: FC = () => {
  const onSubmit = () => {
    console.log('ok');
  };
  const name = 'selectedOption';

  return (
    <Box mt={5}>
      <Typography pb={3}>Wyślij dodatkowe uwagi </Typography>
      <Formik
        initialValues={{
          customernote: '',
          selectedOption: Options.Option1.toString(),
        }}
        // validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting, values, setFieldValue }) => (
          <Form>
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
                  value={values.selectedOption.toString()}
                  onChange={(event) => {
                    setFieldValue(name, event.currentTarget.value);
                  }}
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
            <StyledButton>Przejdź do szczegółów </StyledButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AdditionalInfoForm;
