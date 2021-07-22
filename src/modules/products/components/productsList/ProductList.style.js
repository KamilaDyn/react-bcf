import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    maxWidth: 345,
    margin: "15px 20px",
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
