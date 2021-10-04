import { useEffect, useReducer, useState } from "react";
import { AuthReducer, initialState } from "../reducer";

export const useAuthProvider = () => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const userEmail = user.userDetails.email;
  useEffect(() => {
    const loggedUser = localStorage.getItem("currentUser");
    if (loggedUser !== null) {
      setLoggedIn(true);
    }
  }, [user]);

  return {
    userEmail,
    dispatch,
    isLoggedIn,
    setLoggedIn,
    openDialog,
    setOpenDialog,
  };
};
