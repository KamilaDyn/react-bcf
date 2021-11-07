import { useDispatch } from "react-redux";
import { actions } from "store";

export const useHandleLoginOut = () => {
  const dispatch = useDispatch();
  const handleLoginOut = () => {
    setTimeout(() => {
      dispatch(actions.auth.logoutUser());
    }, 500);
  };
  return { handleLoginOut };
};
