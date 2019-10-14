import { ADD_BOARD, ADD_STAR } from "./actionType";
import { objectToArray } from "../helper";
import axios from "axios";

export const addBoard = (value, template, star = false) => (dispatch) => {
  axios
    .post("https://dolist-9a25a.firebaseio.com/mohammad/todo/board.json", {
      [`${value}`]: {
        id: 107,
        title: value,
        image: template,
        saved: star,
        description: ""
      }
    })
    .then((response) => console.log(response));
};

export const ReadBoard = () => (dispatch) => {
  axios
    .get("https://dolist-9a25a.firebaseio.com/user/mohammad/todo/boards.json")
    .then((response) => {
      console.log("data", Object.values(response.data));
      debugger;
      return;
      return dispatch({
        type: ADD_BOARD,
        payload: {
          object: response.data
          // boardName: value,
          // image: template
        }
      });
    });
};

export const addStar = (item, star) => (dispatch) => {
  console.log(item);
  axios
    .post(
      "https://dolist-9a25a.firebaseio.com/user/mohammad/todo/boards.json",
      {
        id: 105,
        title: value,
        image: template,
        saved: star,
        description: ""
      }
    )
    .then((response) => console.log(response));
  dispatch({
    type: ADD_STAR,
    items: {
      name: item.name,
      image: item.image
    }
  });
};
