import React, { useState } from "react";
import { Form, Field, useFormikContext } from "formik";
import { Grid, MenuItem, Typography, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { StyledBox, StyledButton, Divider } from "./InputComponent.style";
import { fieldsData, categories } from "./InputComponent.utils";

const InputComponent = () => {
  const { values, handleSubmit } = useFormikContext(); // formikProps
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
          />
        </Grid>
        <Grid item xs={6}>
          <Field component={TextField} name='category' select>
            {categories.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field
            component={TextField}
            name='image'
            type='text'
            label='Link do obrazka'
            placeholder='url link'
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
