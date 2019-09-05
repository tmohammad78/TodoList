import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export default (initialState) => {
  initialState =
    JSON.parse(window.localStorage.getItem("state")) || initialState;
  const middleware = [thunk];
  let enhancer;

  // if (process.env.NODE_ENV === "development") {
  //   enhancer = compose(applyMiddleware(...middleware));
  // } else {
  //   enhancer = compose(
  //     applyMiddleware(...middleware),
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //       window.__REDUX_DEVTOOLS_EXTENSION__()
  //   );
  // }

  // const store = createStore(rootReducer, initialState, enhancer);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      auth: state.auth
    };
    window.localStorage.setItem("state", JSON.stringify(persist));
  });

  return store;
};
