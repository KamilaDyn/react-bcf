import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Footer, Head, Main } from "shared/layout";
import { LoginFormContainer, ShoppingCard } from "shared/components";
import { theme } from "../../theme";
import { StyledContainer } from "./MainTemplate.style";

const MainTemplate = ({ children }) => {
  const [openLoggingForm, setOpenLoggingForm] = useState(false);
  const [openShoppingCard, setOpenShoppingCard] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Head
        openShoppingCard={openShoppingCard}
        setOpenShoppingCard={setOpenShoppingCard}
        setOpenLoggingForm={setOpenLoggingForm}
        openLoggingForm={openLoggingForm}
      />
      <StyledContainer>
        <Main openShoppingCard={openShoppingCard}>{children}</Main>
        <ShoppingCard
          openShoppingCard={openShoppingCard}
          setOpenShoppingCard={setOpenShoppingCard}
        />
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
