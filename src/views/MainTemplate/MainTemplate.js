import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Footer, Head, Main, LoginFormContainer, ShoppingCard } from "shared";
import { theme } from "../../theme";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";

const MainTemplate = ({ children }) => {
  const [openProductForm, setOpenProductForm] = useState(false);
  const { productContext } = useProductContext();
  const [openLoggingForm, setOpenLoggingForm] = React.useState(false);
  const {
    shoppingList,
    countItemsInBasket,
    openShoppingCard,
    setOpenShoppingCard,
  } = productContext;

  return (
    <ThemeProvider theme={theme}>
      <Head
        countItems={countItemsInBasket}
        openShoppingCard={openShoppingCard}
        setOpenShoppingCard={setOpenShoppingCard}
        shoppingList={shoppingList}
        setOpenLoggingForm={setOpenLoggingForm}
        openLoggingForm={openLoggingForm}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
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
      />
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
