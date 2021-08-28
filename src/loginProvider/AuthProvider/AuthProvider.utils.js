import { useEffect, useReducer, useState } from "react";
import { AuthReducer, initialState } from "../reducer/reducer";

export const useAuthProvider = () => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  let userEmail = user.userDetails.email;
  useEffect(() => {
    let loggedUser = localStorage.getItem("currentUser");
    if (loggedUser !== null) {
      setLoggedIn(true);
    }

  }, []);

  return {
    userEmail,
    dispatch,
    isLoggedIn,
    setLoggedIn,
    openDialog,
    setOpenDialog,
  };
};
