import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const timeoutFn = (miliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};
const AuthProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    timeoutFn().then(() => {
      setUser(localStorage.getItem("currentUser"));
      if (user !== null) {
        setLoggedIn(true);
      }
    });
  }, [user]);

  const login = (email) => {
    localStorage.setItem("currentUser", email);
    setOpenDialog(false);
    timeoutFn(1000).then(() => {
      setUser(email);
      setLoggedIn(true);
    });
  };

  const logout = () => {
    setOpenDialog(false);
    localStorage.removeItem("currentUser");

    timeoutFn(1000).then(() => {
      setLoggedIn(false);
    });
  };

  const authContextValue = {
    openDialog,
    setOpenDialog,
    user,
    login,
    isLoggedIn,
    logout,
  };
  return <UserContext.Provider value={authContextValue} {...props} />;
};
export default AuthProvider;
