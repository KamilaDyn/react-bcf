import React from "react";
import { Divider } from "@material-ui/core";
import {
  Badge,
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
import { useShoppingCardData } from "./ShoppingCard.utils";
import { StyledList, StyledDrawer } from "./ShoppingCard.style";

const ShoppingCard = ({ shoppingList, dispatch, open, handleDrawer }) => {
  const { handleDelete } = useShoppingCardData();
  return (
    <StyledDrawer variant="persistent" anchor="right" open={open}>
      <StyledIconButton onClick={() => handleDrawer(false)} isCard>
        <ChevronRightIcon />
      </StyledIconButton>

      <Divider />
      <Sidebar>
        <Heading secondary="true">Twoje produkty</Heading>
        {shoppingList.length > 0 ? (
          <StyledList custom="true">
            {shoppingList.map((item) => (
              <ListItem key={item.id} id={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={item.price + "$"}
                />
                <ListItemIcon>
                  <Badge badgeContent={item.count} color="secondary">
                    <ShoppingBasketOutlinedIcon color="primary" />
                  </Badge>
                </ListItemIcon>
                <StyledIconButton
                  onClick={() => handleDelete(item.id, dispatch)}
                >
                  <DeleteIcon color="primary" />
                </StyledIconButton>
              </ListItem>
            ))}
          </StyledList>
        ) : (
          <Typography paragraph>
            Nie wybrałeś jeszcze żadnego produktu
          </Typography>
        )}
      </Sidebar>
    </StyledDrawer>
  );
};

export default ShoppingCard;
