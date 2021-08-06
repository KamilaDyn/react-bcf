import { styled } from "@material-ui/core/styles";
import {
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
  padding: 0,
  [theme.breakpoints.up("xs")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.breakpoints.values.xl,
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "85%",
  flexDirection: "column",
  position: "relative",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up("xs")]: {
    width: "45%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "32%",
  },
  [theme.breakpoints.up("md")]: {
    width: "23%",
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
  textAlign: "center",
  margin: theme.spacing(4),
}));
