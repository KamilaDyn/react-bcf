import React from "react";
import { Link, Typography } from "@material-ui/core/";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import { ProductsList } from "../../components";
import { HeadSection } from "../../components/atoms";
import { NewProductBox, Wrapper } from "./Products.style";
import { useGetProducts } from "./Products.utils";

const Products = () => {
  const { products } = useGetProducts();
  return (
    <Wrapper>
      <HeadSection>
        <NewProductBox>
          <NewReleasesOutlinedIcon color='primary' />
          <Typography variant='h2'>Lista Produktów</Typography>
        </NewProductBox>
        <Link href='#'>Wszystko &#187;</Link>
      </HeadSection>
      <ProductsList products={products} />
    </Wrapper>
  );
};

export default Products;
