import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, Grid, Link } from "@mui/material";
import { selectors } from "store";
import { AddProductForm } from "../AddProductForm";
import { StyledMedia, StyledTypography } from "./ProductsList.style";
import { useProductList } from "./ProductsList.utils";

const ProductsList = () => {
  const allProducts = useProductList();
  const isCardOpen = useSelector(selectors.shoppingList.getCardOpen);
  return (
    <Grid container spacing={4}>
      {allProducts.length &&
        allProducts.map(({ id, title, image, category, price }) => (
          <Grid
            item
            xs={12}
            sm={isCardOpen ? 12 : 6}
            md={isCardOpen ? 6 : 4}
            lg={isCardOpen ? 4 : 3}
            key={id}
          >
            <Card>
              <CardHeader title={title} subheader={category} />
              <Link href='#'>
                <StyledMedia image={image} title={title} alt={title} />
              </Link>
              <StyledTypography>{price}$</StyledTypography>
              <AddProductForm id={id} />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductsList;
