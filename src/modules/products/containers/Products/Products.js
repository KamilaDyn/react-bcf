import React, { useState } from "react";
import { Link, Typography } from "@material-ui/core/";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import { Head, Main, Footer } from "../../../../shared";
import { ProductContext } from "../../../context";
import { useAuth } from "../../../../provider";
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
  const { openDialog, setOpenDialog, isLoggedIn } = useAuth();
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();

  return (
    <>
      <Head
        countItems={countItemsInBasket}
        open={open}
        setOpen={setOpen}
        shoppingList={shoppingList}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        openProductForm={openProductForm}
        setOpenProductForm={setOpenProductForm}
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
    </>
  );
};

export default Products;
