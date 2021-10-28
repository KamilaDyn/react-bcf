const API_URL = "http://localhost:8000/users";

export const saveTokenInLocalStorage = (tokenDetails) => {
  tokenDetails.expireDate = new Date(new Date().getTime() * 2);
  localStorage.setItem("currentUser", JSON.stringify(tokenDetails));
};

const login = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  try {
    let response = await fetch(API_URL, requestOptions);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const formatError = (errorRespond) => {
  switch (errorRespond) {
    case "Email arleady exists":
      return "Email arleady exists";
    default:
      return "";
  }
};

export { login, formatError };
