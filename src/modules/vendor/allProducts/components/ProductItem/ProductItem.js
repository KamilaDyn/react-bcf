import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { selectors } from "store";
import { StyledCard } from "./ProductItem.style";

const ProductItem = ({ setOpenPermission, setProductId }) => {
  const products = useSelector(selectors.products.getProducts);
  return (
    <>
      {products.length &&
        products.map((item) => (
          <StyledCard key={item.id}>
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
                  size='large'
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton size='large'   onClick={() => {
                      setOpenPermission(true);
                      setProductId(item.id);
                    }}>
                  <DeleteIcon
                    color='primary'
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
