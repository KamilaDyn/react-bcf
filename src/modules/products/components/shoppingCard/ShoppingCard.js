import React from "react";
import { Divider } from "@material-ui/core";
import { Card, CardContent, Tooltip, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Sidebar } from "../../../../shared";
import { Heading, StyledIconButton } from "../atoms";
import { useShoppingCardData } from "./ShoppingCard.utils";
import {
  SumContainer,
  StyledList,
  StyledListItem,
  StyledDrawer,
  StyledTypography,
} from "./ShoppingCard.style";

const ShoppingCard = () => {
  const { handleDelete, shoppingList, open, handleDrawer, dispatch, sumPrice } =
    useShoppingCardData();

  return (
    <StyledDrawer variant="persistent" anchor="right" open={open}>
      <StyledIconButton onClick={() => handleDrawer(false)} isCard>
        <ChevronRightIcon />
      </StyledIconButton>

      <Divider />
      <Sidebar>
        <Typography variant="h2">Kosz zakupów</Typography>
        <Card>
          <CardContent>
            {shoppingList.length > 0 ? (
              <>
                <StyledList custom="true">
                  {shoppingList.map((item) => (
                    <StyledListItem key={item.id} id={item.id}>
                      <StyledTypography title="true">
                        {item.name}
                      </StyledTypography>
                      <Typography variant="subtitle2">
                        Ilość: {item.count}
                      </Typography>
                      <Typography variant="subtitle2">
                        Cena: {item.price + "$"}
                      </Typography>
                      <Typography variant="subtitle">
                        Cena za sztukę {item.itemPrice}$
                      </Typography>
                      <StyledIconButton
                        float
                        onClick={() => handleDelete(item.id, dispatch)}
                      >
                        <Tooltip title="Usuń produkt" placement="top">
                          <DeleteIcon />
                        </Tooltip>
                      </StyledIconButton>
                    </StyledListItem>
                  ))}
                </StyledList>
                <SumContainer>
                  <Typography variant="h3">
                    Razem do zapłaty: {sumPrice()}$
                  </Typography>
                </SumContainer>
              </>
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
