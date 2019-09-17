import { ADD_BOARD } from "./actionType";

export const addBoard = (value) => (dispatch) => {
  dispatch({
    type: ADD_BOARD,
    payload: {
      boardName: value
    }
  });
};
