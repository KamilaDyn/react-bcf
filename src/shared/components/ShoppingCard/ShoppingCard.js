import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Divider, Grid, Tooltip, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { selectors } from "store";
import { shoppingBag } from "assets";
import { NumberInput } from "shared/components";
import { StyledButton, StyledIconButton } from "../../atoms";
import { useShoppingCardData } from "./ShoppingCard.utils";
import {
  ControlBox,
  EmptyCard,
  StyledDrawer,
  StyledBox,
  ItemContainer,
  Image,
} from "./ShoppingCard.style";

const ShoppingCard = ({ openShoppingCard, setOpenShoppingCard }) => {
  const { handleDelete, calculatePrice, increment, decrement } =
    useShoppingCardData();
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  return (
    <StyledDrawer variant='persistent' anchor='right' open={openShoppingCard}>
      <StyledIconButton onClick={() => setOpenShoppingCard(false)} isCard>
        <ChevronRightIcon />
      </StyledIconButton>
      <Divider />
      <StyledBox>
        <LocalMallOutlinedIcon />
        <Typography variant='h2'>Twój koszyk</Typography>
      </StyledBox>
      <Divider light />
      {shoppingList.length > 0 ? (
        <>
          {shoppingList.map((item, index) => (
            <ItemContainer key={item.id}>
              <Grid item spacing={2} container alignItems='center'>
                <Grid item xs={2}>
                  <ControlBox>
                    <NumberInput
                      column
                      item={item}
                      quantity={item.count}
                      increment={increment}
                      decrement={decrement}
                    />
                  </ControlBox>
                </Grid>
                <Grid item xs={3}>
                  <Avatar alt={item.title} src={item.img} variant='square' />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant='h5'>{item.name}</Typography>
                  <small>
                    {item.itemPrice.toFixed(2)}$ x {item.count}
                  </small>
                  <Typography variant='subtitle2'>
                    Cena: {item.price.toFixed(2) + "$"}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <StyledIconButton
                    deleteBtn
                    onClick={() => handleDelete(item.id)}
                  >
                    <Tooltip title='Usuń produkt' placement='top'>
                      <DeleteOutlineIcon />
                    </Tooltip>
                  </StyledIconButton>
                </Grid>
              </Grid>
            </ItemContainer>
          ))}

          <StyledButton>Zapłać teraz: {calculatePrice()}$</StyledButton>
        </>
      ) : (
        <EmptyCard>
          <Image
            src={shoppingBag}
            alt='empty shopping card'
            title='empty shopping card'
          />
          <Typography variant='h4'>
            Twój kosz jest pusty. Nie wybrałeś jeszcze żadnego produktu.
          </Typography>
        </EmptyCard>
      )}
    </StyledDrawer>
  );
};

export default ShoppingCard;
