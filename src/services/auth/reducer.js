import { AUTH_SUCCESS, AUTH_FAIL } from "./actionType";

const initialState = {
  idToken: "",
  isAuthenticated: false
  // email: null,
  // expiresIn: null,
  // refreshToken: null,
  // errorMessage: "",
  // errorCode: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        idToken: action.payload.idToken,
        isAuthenticated: action.payload.isAuthenticated
      };
    }

    case AUTH_FAIL:
      return {
        ...state,
        errorCode: action.code,
        errorMessage: action.message
      };

    default:
      return state;
  }
};
