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

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS: {
      debugger;
      const { idToken, isAuthenticated } = action.payload;
      console.log(state);
      // return {
      //   ...state,
      //   idToken,
      //   isAuthenticated: true
      //   // email: action.email,
      //   // expiresIn: action.expiresIn,
      //   // refreshToken: action.refreshToken
      // };
      return Object.assign({}, state, {
        idToken,
        isAuthenticated
      });
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
}
