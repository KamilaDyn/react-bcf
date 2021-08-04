import { styled } from "@material-ui/core/styles";
import { Badge, Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 100px)",
  width: "95%",
  margin: "50px auto 0",
  position: "relative",
});

export const Wrapper = styled("div")(({ isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen && {
    width: "calc(100% - 360px)",
  }),
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  fontSize: theme.typography.fontSize.xxs,
}));
