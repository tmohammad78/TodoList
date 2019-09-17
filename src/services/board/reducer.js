import { ADD_BOARD } from "./actionType";

const initialState = {
  board: [
    {
      name: "",
      image: null
    }
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      return {
        board: [
          ...state.board,
          {
            name: action.payload.boardName,
            image: action.payload.image
          }
        ]
      };
    }
    default:
      return state;
  }
};
