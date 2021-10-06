import React, { useState } from "react";
import { withRouter } from "react-router";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../theme";
import {
  Footer,
  Head,
  Main,
  LoginFormContainer,
  ShoppingCard,
} from "../../shared";
import { useAuthState } from "../../loginProvider";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";

const MainTemplate = ({ children }) => {
  const [openProductForm, setOpenProductForm] = useState(false);
  const { productContext } = useProductContext();
  const { stateContext } = useAuthState();

  const {
    shoppingList,
    countItemsInBasket,
    openShoppingCard,
    setOpenShoppingCard,
  } = productContext;
  const { openLoggingForm, isLoggedIn, user, setOpenLoggingForm } =
    stateContext;
  return (
    <ThemeProvider theme={theme}>
      <Head
        countItems={countItemsInBasket}
        openShoppingCard={openShoppingCard}
        setOpenShoppingCard={setOpenShoppingCard}
        shoppingList={shoppingList}
        setOpenLoggingForm={stateContext.setOpenLoggingForm}
        openLoggingForm={stateContext.openLoggingForm}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
        isLoggedIn={isLoggedIn}
        user={user}
      />
      <StyledContainer>
        <Main openShoppingCard={openShoppingCard}>{children}</Main>
        <ShoppingCard
          openShoppingCard={openShoppingCard}
          shoppingList={shoppingList}
        />
      </StyledContainer>
      <LoginFormContainer
        openLoggingForm={openLoggingForm}
        setOpenLoggingForm={setOpenLoggingForm}
        user={user}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default withRouter(MainTemplate);
