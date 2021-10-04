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
import { useAuthProvider } from "../../loginProvider";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";

const MainTemplate = ({ children }) => {
  const [openProductForm, setOpenProductForm] = useState(false);
  const { openDialog, setOpenDialog, isLoggedIn, userEmail } =
    useAuthProvider();
  const { productContext } = useProductContext();
  const { shoppingList, countItemsInBasket, open, setOpen } = productContext;
  return (
    <ThemeProvider theme={theme}>
      <Head
        countItems={countItemsInBasket}
        open={open}
        setOpen={setOpen}
        shoppingList={shoppingList}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
        isLoggedIn={isLoggedIn}
        user={userEmail}
      />
      <StyledContainer>
        <Main open={open}>{children}</Main>
        <ShoppingCard open={open} shoppingList={shoppingList} />
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
