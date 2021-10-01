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
import { useAuth } from "../../provider";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";
import { AddNewProductContainer } from "../../modules/products/components/AddNewProductContainer";

const MainTemplate = ({ children }) => {
  const [openProductForm, setOpenProductForm] = useState(false);
  const { openDialog, setOpenDialog, isLoggedIn, user } = useAuth();
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
        user={user}
      />
      <StyledContainer>
        <Main open={open}>{children}</Main>
        <ShoppingCard open={open} shoppingList={shoppingList} />
      </StyledContainer>
      <LoginFormContainer
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
      {isLoggedIn && (
        <AddNewProductContainer
          openProductForm={openProductForm}
          setOpenProductForm={setOpenProductForm}
        />
      )}
      <Footer />
    </ThemeProvider>
  );
};

export default withRouter(MainTemplate);
