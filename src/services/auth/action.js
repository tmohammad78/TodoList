import { AUTH_SUCCESS, AUTH_FAIL } from "./actionType";
import axios from "axios";

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: {
    idToken: data.idToken
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

// export const registerUser = (name,email,pass,history) => {
//   return dispatch => {
//     const apiData = {
//       email: email,
//       password: pass,
//       returnSecureToken: true
//     };
//     axios
//       .post(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
//         apiData
//       )
//       .then((response) => {
//         console.log(response);
//         if(response.status == 200){
//           history.push('/dashboard');
//           dispatch(authSuccess(response.data));
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data.error);
//         dispatch(authFail(error.response.data.error));
//       });
//   };
//   }

export const auth = (name, email, pass, history) => (dispatch) => {
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
        console.log(response);
        if (response.status == 200) {
          history.push("/dashboard");
          // return dispatch({
          //   type: AUTH_SUCCESS,
          //   payload: {
          //     idToken: response.data.idToken,
          //     isAuthenticated: true
          //   }
          // });
        }
      })
      .catch((error) => {
        console.log(error);
        // dispatch(authFail(error.response.data.error));
      });
  } else {
    return axios
      .post(
        "    https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
        apiData
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          history.push("/dashboard");
          // return dispatch({
          //   type: AUTH_SUCCESS,
          //   payload: {
          //     idToken: response.data.idToken,
          //     isAuthenticated: true
          //   }
          // });
        }
      })
      .catch((error) => {
        console.log(error);
        // dispatch(authFail(error.response.data.error));
      });
  }
  // } else {
  //   return (dispatch) => {
  //     fire
  //       .auth()
  //       .signInWithEmailAndPassword(email, pass)
  //       .then((response) => {
  //         console.log(response);
  //         dispatch(authSuccess(response.data));
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         dispatch(authFail(e));
  //       });
  //   };
  // }
};
