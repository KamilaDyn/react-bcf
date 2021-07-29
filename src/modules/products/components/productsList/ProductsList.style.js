import { styled } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";

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
  fontSize: "42px",
});
