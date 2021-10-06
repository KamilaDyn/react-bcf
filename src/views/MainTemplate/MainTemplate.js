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
import { useAuthProvider, useAuthState } from "../../loginProvider";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";

const MainTemplate = ({ children }) => {
  const [openProductForm, setOpenProductForm] = useState(false);
  // const { openDialog, setOpenDialog, isLoggedIn, userEmail } =
  //   useAuthProvider();
  const { productContext } = useProductContext();
  const { stateContext } = useAuthState();

  const {
    shoppingList,
    countItemsInBasket,
    openShoppingCard,
    setOpenShoppingCard,
  } = productContext;
  const { openDialog, isLoggedIn, userEmail, setOpenDialog } = stateContext;
  return (
    <ThemeProvider theme={theme}>
      <Head
        countItems={countItemsInBasket}
        openShoppingCard={openShoppingCard}
        setOpenShoppingCard={setOpenShoppingCard}
        shoppingList={shoppingList}
        setOpenDialog={stateContext.setOpenDialog}
        openDialog={stateContext.openDialog}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
        isLoggedIn={isLoggedIn}
        user={userEmail}
      />
      <StyledContainer>
        <Main openShoppingCard={openShoppingCard}>{children}</Main>
        <ShoppingCard
          openShoppingCard={openShoppingCard}
          shoppingList={shoppingList}
        />
      </StyledContainer>
      <LoginFormContainer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        user={userEmail}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default withRouter(MainTemplate);
