import React from "react";
import { Card, CardHeader, Grid, Link } from "@mui/material";
import { AddProductForm } from "../AddProductForm";
import { StyledMedia, StyledTypography } from "./ProductsList.style";
import { useProductList } from "./ProductsList.utils";

const ProductsList = ({ open }) => {
  const allProducts = useProductList();
  return (
    <Grid container spacing={4}>
      {allProducts.length &&
        allProducts.map(({ id, title, image, category, price }, index) => (
          <Grid
            item
            xs={12}
            sm={open ? 12 : 6}
            md={open ? 6 : 4}
            lg={open ? 4 : 3}
            key={id}
          >
            <Card>
              <CardHeader title={title} subheader={category} />
              <Link href='#'>
                <StyledMedia image={image} title={title} alt={title} />
              </Link>
              <StyledTypography>{price}$</StyledTypography>
              <AddProductForm index={index} id={id} />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductsList;
