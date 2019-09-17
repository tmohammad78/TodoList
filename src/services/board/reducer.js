import { ADD_BOARD } from "./actionType";

const initialState = {
  name:[]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      return {
        ...state,
        name: [...state.name,action.payload.boardName]
      };
    }
    default:
      return state;
  }
};
