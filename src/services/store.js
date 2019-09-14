import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../services/reducer";

export default (initialState) => {
  // initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;

  const middleware = [thunk];
  let enhancer;

  enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(rootReducer, initialState, enhancer);
  store.subscribe(() => {
    const state = store.getState();
    // const token = {
    //   token: state.auth
    // };
  });
  //   window.localStorage.setItem("token", JSON.stringify(token));
  // });
  return store;
};
