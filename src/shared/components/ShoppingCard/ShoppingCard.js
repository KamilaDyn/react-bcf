import React from "react";
import { Avatar, Divider, Grid, Tooltip, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { shoppingBag } from "../../../assets";
import { NumberInput, useQuantity } from "../../../shared";
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

const ShoppingCard = () => {
  const {
    handleDelete,
    handleDrawer,
    dispatch,
    open,
    shoppingList,
    calculatePrice,
  } = useShoppingCardData();
  const { setQuantity, increment, decrement } = useQuantity();
  return (
    <StyledDrawer variant='persistent' anchor='right' open={open}>
      <StyledIconButton onClick={() => handleDrawer(false)} isCard>
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
                      index={index}
                      quantity={item.count}
                      setQuantity={setQuantity}
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
                    {item.itemPrice}$ x {item.count}
                  </small>
                  <Typography variant='subtitle2'>
                    Cena: {item.price + "$"}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <StyledIconButton
                    deleteBtn
                    onClick={() => handleDelete(item.id, dispatch)}
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
