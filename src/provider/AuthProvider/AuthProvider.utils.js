import { useEffect, useState } from "react";

const timeoutFn = (miliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};

export const useAuthProvider = () => {
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

  return {
    login,
    logout,
    isLoggedIn,
    setLoggedIn,
    user,
    setUser,
    openDialog,
    setOpenDialog,
  };
};
