import { styled } from "@material-ui/core/styles";
import { Badge, Container } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";

export const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "calc(100vh - 100px)",
  margin: "50px auto 0",
  position: "relative",
  maxWidth: "100%",
}));

export const Wrapper = styled("div")(({ isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen && {
    width: "calc(100% - 360px)",
  }),
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  fontSize: theme.typography.fontSize.xxs,
}));
export const StyledLocalMallIcon = styled(LocalMallIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.fontSize.s,
}));
