import React from "react";

import { useAuthProvider } from "./AuthProvider.utils";
import { AuthStateContext, AuthDispatchContext } from "../context";

const AuthProvider = ({ children }) => {
  const {
    isLoggedIn,
    setLoggedIn,
    userEmail,
    dispatch,
    setOpenDialog,
    openDialog,
  } = useAuthProvider();

  const authContextValue = {
    isLoggedIn: isLoggedIn,
    setLoggedIn: setLoggedIn,
    user: userEmail,
    setOpenDialog: setOpenDialog,
    openDialog: openDialog,
  };

  return (
    <AuthStateContext.Provider value={authContextValue}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
