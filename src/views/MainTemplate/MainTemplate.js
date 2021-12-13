import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Head, Main, Menu } from 'shared/layout';
import { LoginFormContainer, ShoppingCard } from 'shared/components';
import { theme } from '../../theme';
import { StyledContainer } from './MainTemplate.style';

const MainTemplate = ({ children }) => {
  const [openLoggingForm, setOpenLoggingForm] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Head
        setOpenLoggingForm={setOpenLoggingForm}
        openLoggingForm={openLoggingForm}
      />
      <Menu />
      <StyledContainer>
        <Main>{children}</Main>
        <ShoppingCard />
      </StyledContainer>
      <LoginFormContainer
        openLoggingForm={openLoggingForm}
        setOpenLoggingForm={setOpenLoggingForm}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
