import { ADD_BOARD, ADD_STAR } from "./actionType";
import { objectToArray } from "../helper";

export const addBoard = (value, template) => (dispatch) => {
  dispatch({
    type: ADD_BOARD,
    payload: {
      boardName: value,
      image: template
    }
  });
};

export const addStar = (item) => (dispatch) => {
  dispatch({
    type: ADD_STAR,
    items: {
      name: item.name,
      image: item.image
    }
  });
};
