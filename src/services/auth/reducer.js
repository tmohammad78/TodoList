import { AUTH_SUCCESS, AUTH_FAIL } from "./actionType";

const initialState = {
  idToken: null,
  email: null,
  expiresIn: null,
  refreshToken:null,
  errorMessage: "",
  errorCode: ""
};

export default function(state = initialState, action) {
  switch (action.typ) {
    case AUTH_SUCCESS:
      console.log(action.idToken);
      return {
        ...state,
        idToken: action.idToken
        // email: action.email,
        // expiresIn: action.expiresIn,
        // refreshToken: action.refreshToken
      };

    case AUTH_FAIL:
      return {
        ...state,
        errorCode: action.code,
        errorMessage: action.message
      };

    default:
      return state;
  }
}
