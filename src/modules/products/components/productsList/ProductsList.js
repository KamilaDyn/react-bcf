import React from "react";
import { CardHeader, Link } from "@material-ui/core";
import { AddProductForm } from "../AddProductForm";

import {
  StyledCard,
  StyledContainer,
  StyledMedia,
  StyledTypography,
} from "./ProductsList.style";

const ProductsList = ({ products }) => {
  return (
    <StyledContainer>
      {products.map((p, index) => (
        <StyledCard key={index}>
          <CardHeader title={p.title} subheader={p.category} />
          <Link href="#">
            <StyledMedia image={p.image} title={p.title} alt={p.title} />
          </Link>
          <StyledTypography>{p.price}$</StyledTypography>
          <AddProductForm index={index} id={p.id} />
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default ProductsList;
