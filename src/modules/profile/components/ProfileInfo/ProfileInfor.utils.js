import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../loginProvider/actions";

export const useHandleLoginOut = () => {
  const dispatch = useDispatch();
  const handleLoginOut = () => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, 500);
  };
  return { handleLoginOut };
};
