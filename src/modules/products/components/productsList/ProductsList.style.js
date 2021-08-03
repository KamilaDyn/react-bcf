import { styled } from "@material-ui/core/styles";
import {
  Accordion,
  Card,
  CardActions,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { theme } from "../../../../theme";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const StyledCard = styled(Card)({
  width: 280,
  maxWidth: 345,
  margin: "15px 20px",
  flexDirection: "column",
  position: "relative",
});

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledTypography = styled(Typography)({
  fontSize: theme.fontSize.m,
  color: theme.colors.col1,
  textAlign: "center",
});

export const StyledAccordion = styled(Accordion)({
  position: "absolute",
  bottom: 0,
});
