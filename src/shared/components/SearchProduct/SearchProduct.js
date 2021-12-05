import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, FormControl, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { actions } from "store";
import { StyledSearchInput, StyledPaper } from "./SearchProduct.style";
import { useSearchInput } from "./SearchProduct.utils";

const SearchProduct = () => {
  const { handleSearch, productItems, displayProducts, setDisplayProducts } =
    useSearchInput();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%" }} component='form'>
      <FormControl value='Outlined' fullWidth>
        <StyledSearchInput
          onChange={handleSearch}
          startAdornment={<SearchIcon color='textSecondary' />}
          placeholder='Szukaj produktu'
        ></StyledSearchInput>
      </FormControl>
      {displayProducts && (
        <StyledPaper>
          {productItems.map((item) => (
            <MenuItem
              component={Link}
              to={`/products/search/${item.type}`}
              onClick={() => {
                setDisplayProducts(false);
                dispatch(actions.searchProducts.searchProducts(item.type));
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </StyledPaper>
      )}
    </Box>
  );
};

export default SearchProduct;
