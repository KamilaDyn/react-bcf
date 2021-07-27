import { makeStyles, styled } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

export const StyledIconButton = styled(IconButton)(({ theme, expandOpen }) => ({
  transform: "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(expandOpen && { transform: "rotate(180deg)" }),
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    maxWidth: 345,
    margin: "15px 20px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  price: {
    fontSize: "42px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
