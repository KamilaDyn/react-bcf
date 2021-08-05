import { styled } from "@material-ui/core/styles";
import {
  Accordion,
  Card,
  CardActions,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.breakpoints.values.xl,
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 260,
  maxWidth: 345,
  margin: theme.spacing(4, 0),
  flexDirection: "column",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(4, 5),
  },
}));

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

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.m,
  color: theme.palette.primary.main,
  margin: theme.spacing(2, 1),
  textAlign: "center",
}));

export const StyledAccordion = styled(Accordion)({
  position: "absolute",
  bottom: 0,
});
