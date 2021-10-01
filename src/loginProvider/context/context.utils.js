import { useContext } from "react";
import {
    AuthStateContext,
    AuthDispatchContext,
} from "./context";

export const  useAuthState=() =>{
    const stateContext = useContext(AuthStateContext);
    if (!stateContext) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }
    return { stateContext };
}

export const useAuthDispatch=() =>{
    const dispatchContext = useContext(AuthDispatchContext);

    if (!dispatchContext) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return { dispatchContext };
}
