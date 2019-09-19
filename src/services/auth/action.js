import { AUTH_SUCCESS, AUTH_FAIL } from "./actionType";
import axios from "axios";

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: {
    idToken: data.idToken,
    isAuthenticated: true
  }
});
// return {

//   // expiresIn: data.expiresIn,
//   // refreshToken: data.refreshToken
// };

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    code: error.code,
    message: error.message
  };
};

export const auth = (name, email, pass, history) => (dispatch, getState) => {
  const test = getState().auth.isAuthenticated;
  const apiData = {
    email: email,
    password: pass,
    returnSecureToken: true
  };
  if (name) {
    return axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
        apiData
      )
      .then((response) => {
        if (response.status == 200) {
          history.push("/login");
        }
      })
      .catch((error) => {

      });
  } else {
    return axios
      .post(
        "    https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
        apiData
      )
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("Token", response.data.idToken);
          dispatch({
            type: AUTH_SUCCESS,
            payload: {
              idToken: response.data.idToken,
              isAuthenticated: true
            }
          });
          history.push("/app");
        }
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
        // dispatch(authFail(error.response.data.error));
      });
  }
};
