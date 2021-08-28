import { useContext } from "react";
import {
    AuthStateContext,
    AuthDispatchContext,
} from "./context";

export function useAuthState() {
    const stateContext = useContext(AuthStateContext);
    if (stateContext === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }
    return { stateContext };
}

export function useAuthDispatch() {
    const dispatchContext = useContext(AuthDispatchContext);

    if (dispatchContext === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return { dispatchContext };
}
