import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "store";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "shared/components";
import { actions } from "store";

const ProductTypeList = ({ type }) => {
  const isCardOpen = useSelector(selectors.shoppingList.getCardOpen);
  const foundProducts = useSelector(
    selectors.searchProducts.getSearchedProducts
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(actions.searchProducts.searchProducts(type));
    }, 200);
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        {foundProducts.length &&
          foundProducts.map(({ id, title, image, category, price }) => (
            <Grid
              item
              xs={12}
              sm={isCardOpen ? 12 : 6}
              md={isCardOpen ? 6 : 4}
              lg={isCardOpen ? 4 : 3}
              key={id}
            >
              <ProductCard
                id={id}
                title={title}
                image={image}
                category={category}
                price={price}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ProductTypeList;
