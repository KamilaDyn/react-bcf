import { styled } from "@material-ui/core/styles";
import { CardMedia, Typography } from "@material-ui/core";

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.m,
  color: theme.palette.primary.main,
  textAlign: "center",
  margin: theme.spacing(4),
}));
