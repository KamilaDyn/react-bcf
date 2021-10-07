import {
  logout,
  useAuthDispatch,
  useAuthState,
} from "../../../../loginProvider";

export const useHandleLoginOut = () => {
  const { dispatchContext } = useAuthDispatch();
  const { stateContext } = useAuthState();
  const handleLoginOut = () => {
    stateContext.setOpenLoggingForm(false);
    setTimeout(() => {
      stateContext.setLoggedIn(false);
      logout(dispatchContext);
    }, 500);
  };
  return { handleLoginOut };
};
