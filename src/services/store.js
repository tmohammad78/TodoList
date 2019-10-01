import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../services/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

// const enhancer = compose(
//   applyMiddleware(...middleware),
//   typeof module !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const initial = (initialState) => {
  initialState = initialState;
  // JSON.parse(window.localStorage.getItem("board")) || initialState;

  // const middleware = [thunk];
  // let enhancer;

  const enhancer = composeWithDevTools(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(rootReducer, initialState, enhancer);
  store.subscribe(() => {
    const state = store.getState();
    const board = {
      board: state.board
    };
    // window.localStorage.setItem("board", JSON.stringify(board));
  });
  // });
  return store;
};
export default initial;
