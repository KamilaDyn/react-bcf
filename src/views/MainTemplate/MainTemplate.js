import React, { useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../theme";
import {
  Footer,
  Head,
  Main,
  LoginFormContainer,
  ShoppingCard,
} from "../../shared";
import { useProductContext } from "../../context";
import { StyledContainer } from "./MainTemplate.style";
import { loginUser } from "../../loginProvider/actions";

const MainTemplate = ({ children, profile, isUserLogged }) => {
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
        isLoggedIn={isUserLogged}
        user={profile.user}
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
const mapStateToProps = (state) => ({
  profile: state.profile,
  isUserLogged: state.profile.isLoggedIn,
});
const mapDispatchToProps = {
  loginUser,
};

const MainTemplateConsumer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainTemplate)
);

export default MainTemplateConsumer;
