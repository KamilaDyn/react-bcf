import React from "react";
import { Divider } from "@material-ui/core";
import {
  Badge,
  Card,
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Sidebar } from "../../../../shared";
import { Heading, StyledIconButton } from "../atoms";
import { useQuantity } from "../NumberInput/NumberInput.utils";
import { NumberInput } from "../NumberInput";
import { useShoppingCardData } from "./ShoppingCard.utils";
import {
  ActionsContainer,
  StyledList,
  StyledListItem,
  StyledDrawer,
  StyledTypography,
} from "./ShoppingCard.style";

const ShoppingCard = () => {
  const { handleDelete, shoppingList, open, handleDrawer, dispatch, quantity } =
    useShoppingCardData();
  const { setQuantity, increment, decrement } = useQuantity();

  return (
    <StyledDrawer variant="persistent" anchor="right" open={open}>
      <StyledIconButton onClick={() => handleDrawer(false)} isCard>
        <ChevronRightIcon />
      </StyledIconButton>

      <Divider />
      <Sidebar>
        <Heading secondary="true">Kosz zakupów</Heading>
        <Card>
          <CardContent>
            {shoppingList.length > 0 ? (
              <StyledList custom="true">
                {shoppingList.map((item) => (
                  <StyledListItem key={item.id} id={item.id}>
                    <StyledTypography title="true">
                      {item.name}
                    </StyledTypography>
                    {/* <ListItemIcon>
                      <Badge badgeContent={item.count} color="secondary">
                        <ShoppingBasketOutlinedIcon color="primary" />
                      </Badge>
                    </ListItemIcon> */}
                    <StyledTypography price="true">
                      Cena: {item.price + "$"}
                    </StyledTypography>
                    <StyledTypography price="true">
                      Ilość: {item.count}
                    </StyledTypography>
                    <ActionsContainer>
                      <NumberInput
                        quantity={quantity()}
                        setQuantity={setQuantity}
                        increment={increment}
                        decrement={decrement}
                      />
                      <StyledIconButton
                        onClick={() => handleDelete(item.id, dispatch)}
                      >
                        <DeleteIcon color="primary" />
                      </StyledIconButton>
                    </ActionsContainer>
                  </StyledListItem>
                ))}
              </StyledList>
            ) : (
              <Typography paragraph>
                Nie wybrałeś jeszcze żadnego produktu
              </Typography>
            )}
          </CardContent>
        </Card>
      </Sidebar>
    </StyledDrawer>
  );
};

export default ShoppingCard;
