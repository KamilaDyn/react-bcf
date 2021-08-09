import React from "react";
import { Card, CardHeader, Grid, Link } from "@material-ui/core";
import { AddProductForm } from "../AddProductForm";

import { StyledMedia, StyledTypography } from "./ProductsList.style";

const ProductsList = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((p, index) => (
        <Grid item xxs={12} xs={6} md="4" lg="3">
          <Card>
            <CardHeader title={p.title} subheader={p.category} />
            <Link href="#">
              <StyledMedia image={p.image} title={p.title} alt={p.title} />
            </Link>
            <StyledTypography>{p.price}$</StyledTypography>
            <AddProductForm index={index} id={p.id} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
