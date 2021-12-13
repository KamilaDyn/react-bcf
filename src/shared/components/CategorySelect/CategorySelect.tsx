import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CategoryIcon from '@mui/icons-material/Category';
import { actions } from 'store';

import {
  StyledButton,
  StyledTypography,
  StyledBox,
} from './CategorySelect.style';
import { useSelectCategory } from './CategorySelect.utils';

const CategorySelect: FC = () => {
  const { reduceCategory, selectCategory, setSelectCategory } =
    useSelectCategory();

  const dispatch = useDispatch();

  return (
    <Box position="relative">
      <>
        <StyledButton
          color="secondary"
          onClick={() => setSelectCategory(!selectCategory)}
        >
          <CategoryIcon />
          <StyledTypography>Kategorie</StyledTypography>

          <ArrowDropDownIcon />
        </StyledButton>
        {selectCategory && (
          <StyledBox category={selectCategory}>
            {reduceCategory.map((value: string) => (
              <MenuItem
                component={Link}
                to={`/products/search/${value}`}
                onClick={() => {
                  setSelectCategory(false);
                  dispatch(
                    actions.searchProducts.searchProductsByCategory(value)
                  );
                }}
              >
                {value}
              </MenuItem>
            ))}
          </StyledBox>
        )}
      </>
    </Box>
  );
};

export default CategorySelect;
