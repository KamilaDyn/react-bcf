import React, { useState } from "react";
import { Link, Typography } from "@material-ui/core/";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import { Head, Main, Footer } from "../../../../shared";
import { useAuthState } from "../../../../loginProvider";
import { ProductContext } from "../../../context";
import {
  AddNewProductContainer,
  LoginFormContainer,
  ShoppingCard,
  ProductsList,
} from "../../components";
import { HeadSection } from "../../components/atoms";
import { NewProductBox, StyledContainer, Wrapper } from "./Products.style";
import { useGetProducts, useCountItems } from "./Products.utils";


const Products = () => {
  const [openProductForm, setOpenProductForm] = useState(false);
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();
  const { stateContext } = useAuthState();

  console.log(stateContext.user)
  return (
    <>
      <Head
        countItems={countItemsInBasket}
        open={open}
        setOpen={setOpen}
        shoppingList={shoppingList}
        setOpenDialog={stateContext.setOpenDialog}
        openDialog={stateContext.openDialog}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
        isLoggedIn={stateContext.isLoggedIn}
        userEmail={stateContext.user}
      />
      <StyledContainer>
        <Main open={open}>
          <Wrapper>
            <HeadSection>
              <NewProductBox>
                <NewReleasesOutlinedIcon color="primary" />
                <Typography variant="h2">Lista Produktów</Typography>
              </NewProductBox>
              <Link href="#">Wszystko &#187;</Link>
            </HeadSection>
            <ProductContext.Provider
              value={{
                shoppingList: shoppingList,
                products: products,
                dispatch: dispatch,
              }}
            >
              <ProductsList
                products={products}
                shoppingList={shoppingList}
                open={open}
              />
            </ProductContext.Provider>
          </Wrapper>
        </Main>
        <ProductContext.Provider
          value={{
            shoppingList: shoppingList,
            dispatch: dispatch,
            open: open,
            handleDrawer: setOpen,
          }}
        >
          <ShoppingCard />
        </ProductContext.Provider>
      </StyledContainer>

      <LoginFormContainer
        openDialog={stateContext.openDialog}
        setOpenDialog={stateContext.setOpenDialog}
      />

      <AddNewProductContainer
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
      />

      <Footer />
    </>
  );
};

export default Products;
