import { ADD_BOARD } from "./actionType";

export const addBoard = (value,template) => (dispatch) => {
  dispatch({
    type: ADD_BOARD,
    payload: {
      boardName: value,
      image:template
    }
  });
};
