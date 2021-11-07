import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton, Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { selectors } from "store";
import { StyledCard } from "./ProductItem.style";

const ProductItem = ({ setOpenPermission, setProductId }) => {
  const products = useSelector(selectors.products.getProducts);

  return (
    <>
      {products.length &&
        products.map((item) => (
          <StyledCard id={item.id}>
            <Grid container alignItems='center' spacing={2}>
              <Grid item xs={5}>
                <Typography color='inherit'> {item.title}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography color='inherit'>{item.stock}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography color='inherit'>${item.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography color='inherit'>
                  {item.sale ? `$${item.sale}` : ""}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  component={Link}
                  to={`/vendor/edit-product/${item.id}`}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <DeleteIcon
                    color='primary'
                    onClick={() => {
                      setOpenPermission(true);
                      setProductId(item.id);
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </StyledCard>
        ))}
    </>
  );
};

export default ProductItem;
