import React from "react";
import { Link, Typography } from "@mui/material/";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import { ProductsList } from "../../components/ProductsList";
import { HeadSection } from "../../components/atoms";
import { NewProductBox, Wrapper } from "./Products.style";

const Products = () => {
  return (
    <Wrapper>
      <HeadSection>
        <NewProductBox>
          <NewReleasesOutlinedIcon color='primary' />
          <Typography variant='h2'>Lista Produktów</Typography>
        </NewProductBox>
        <Link href='#' underline='none'>
          Wszystko &#187;
        </Link>
      </HeadSection>
      <ProductsList />
    </Wrapper>
  );
};

export default Products;
