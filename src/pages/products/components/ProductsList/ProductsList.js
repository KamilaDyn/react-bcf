import React from "react";
import { Card, CardHeader, Grid, Link } from "@material-ui/core";
import { AddProductForm } from "../AddProductForm";

import { StyledMedia, StyledTypography } from "./ProductsList.style";

const ProductsList = ({ products, open }) => {
  return (
    <Grid container spacing={4}>
      {products.map((p, index) => (
        <Grid
          item
          xs={12}
          sm={open ? 12 : 6}
          md={open ? 6 : 4}
          lg={open ? 4 : 3}
          key={p.id}
        >
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
