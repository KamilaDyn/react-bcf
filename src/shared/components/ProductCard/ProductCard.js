import React from "react";
import { Card, CardHeader, Link } from "@mui/material";
import { AddProductForm } from "../AddProductForm";
import { StyledMedia, StyledTypography } from "./ProductsCard.style";

const ProductCard = ({ title, category, image, price, id }) => {
  return (
    <Card>
      <CardHeader title={title} subheader={category} />
      <Link href='#'>
        <StyledMedia image={image} title={title} alt={title} />
      </Link>
      <StyledTypography>{price}$</StyledTypography>
      <AddProductForm id={id} />
    </Card>
  );
};

export default ProductCard;
