const ROOT_URL = "http://localhost:8000/users";

export const  loginUser= async (dispatch, loginPayload)=> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(ROOT_URL, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "LOGIN_ERROR", error: data.error[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export const logout=(dispatch)=> {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
