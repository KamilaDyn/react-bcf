import React, { useState } from "react";
import { Form, Field, useFormikContext } from "formik";
import {
  Grid,
  MenuItem,
  Typography,
  Box,
  FormControl,
} from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import { StyledBox, StyledButton, Divider } from "./InputComponent.style";
import { fieldsData, categories } from "./InputComponent.utils";

const InputComponent = () => {
  const { values, handleSubmit } = useFormikContext();
  const [fieldValue, setFieldValue] = useState(null);
  const inputEl = React.useRef(null);
  const triggerClick = () => {
    inputEl.current.click();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Field
            component={TextField}
            name='title'
            type='text'
            label='Nazwa produktu'
            InputLabelProps={{
              shrink: values.title && true,
            }}
            value={values.title}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <Field
              component={Select}
              name='category'
              defaultValue={values.category || categories[0]}
              disableUnderline
              variant='outlined'
            >
              {categories.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Field
            component={TextField}
            name='image'
            type='text'
            label='Link do obrazka'
            InputLabelProps={{
              shrink: values.image && true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledBox addImg typeIndex='0'>
            <input
              name='file'
              ref={inputEl}
              type='file'
              multiple
              typeIndex='-1'
              accept='.jpeg,.jpg,.png,.gif'
              hidden
              onChange={(event) => {
                setFieldValue(event.currentTarget.files);
              }}
            />
            <Typography variant='h5' align='center'>
              Przeciągnij i upuść obrazek tutaj
            </Typography>
            <Box display='flex' alignItems='center' margin={2}>
              <Divider />
              <Typography>lub</Typography>
              <Divider />
            </Box>
            <StyledButton
              sixe='medium'
              variant='contained'
              onClick={triggerClick}
            >
              Wybierz obraz
            </StyledButton>
            <Typography align='center'>Rozmiar obrazka 200x200</Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name='description'
            type='text'
            label='Opis produktu'
            placeholder='Opis produktu'
            multiline
            minRows={5}
            InputLabelProps={{
              shrink: values.description && true,
            }}
          />
        </Grid>
        {fieldsData.map(({ name, type, label }) => (
          <Grid item xs={6}>
            <Field
              component={TextField}
              name={name}
              type={type}
              label={label}
            />
          </Grid>
        ))}
        <Grid item container justifyContent='center'>
          <StyledButton
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            {values.title === "" ? "Dodaj produkt" : "Edytuj produkt"}
          </StyledButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default InputComponent;