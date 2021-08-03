import { Container, styled, Typography } from "@material-ui/core";
import { theme } from "../../../theme";

export const StyledContainer = styled(Container)({
  backgroundColor: theme.colors.col2,
  width: "100wv",
  height: 50,
  lineHeight: 50,
  marginTop: 50,
});

export const StyledTypography = styled(Typography)({
  color: theme.colors.colf,
  textAlign: "center",
  lineHeight: "50px",
});
