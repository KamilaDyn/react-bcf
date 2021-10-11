import React from "react";
import { Link, Typography } from "@material-ui/core/";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import { useProductContext } from "../../../../context";
import { ProductsList } from "../../components/ProductsList";
import { HeadSection } from "../../components/atoms";
import { NewProductBox, Wrapper } from "./Products.style";

const Products = () => {
  const { productContext } = useProductContext();

  return (
    <Wrapper>
      <HeadSection>
        <NewProductBox>
          <NewReleasesOutlinedIcon color='primary' />
          <Typography variant='h2'>Lista Produktów</Typography>
        </NewProductBox>
        <Link href='#'>Wszystko &#187;</Link>
      </HeadSection>
      <ProductsList products={productContext.products} />
    </Wrapper>
  );
};

export default Products;
