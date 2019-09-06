import { AUTH_SUCCESS, AUTH_FAIL } from "./actionType";
import fire from "../../services/configure";
import axios from "axios";

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    email: data.email,
    idToken: data.idToken,
    expiresIn: data.expiresIn,
    refreshToken:data.refreshToken
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    code: error.code,
    message: error.message
  };
};

export const auth = (email, pass, name) => {
  if (name) {
    return (dispatch) => {
      const apiData = {
        email: email,
        password: pass,
        returnSecureToken: true
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
          apiData
        )
        .then((response) => {
          console.log(response);
          dispatch(authSuccess(response.data));
        })
        .catch((error) => {
          console.log(error.response.data.error);
          dispatch(authFail(error.response.data.error));
        });
    };
  } else {
    return (dispatch) => {
      fire
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((response) => {
          console.log(response);
          dispatch(authSuccess(response.data));
        })
        .catch((e) => {
          console.log(e);
          dispatch(authFail(e.code));
        });
    };
  }
};

// axios
// .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I',authData)
// .then((response) => {
//   console.log(response);
//   dispatch(authSuccess(response.data));
// })
// .catch(error => {
//   console.log(error);
// });
