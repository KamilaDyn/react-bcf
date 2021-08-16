import React from "react";
import { UserContext } from "../context/UserContext";
import { useAuthProvider } from "./AuthProvider.utils";

const AuthProvider = (props) => {
  const { login, logout, isLoggedIn, user, openDialog, setOpenDialog } =
    useAuthProvider();

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
