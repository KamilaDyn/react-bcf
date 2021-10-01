import { useContext } from "react";
import { UserContext } from "../context";

const useAuth = () => useContext(UserContext);
export default useAuth;
