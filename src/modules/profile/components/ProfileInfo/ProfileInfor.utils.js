import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../store";

export const useHandleLoginOut = () => {
  const dispatch = useDispatch();
  const handleLoginOut = () => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, 500);
  };
  return { handleLoginOut };
};
