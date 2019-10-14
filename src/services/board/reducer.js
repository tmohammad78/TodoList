import { ADD_BOARD, ADD_STAR } from "./actionType";

const initialState = {
  board: [
    {
      name: null,
      image: null
    }
  ],
  starBoard: [],
  object: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      return {
        // board: [
        //   ...state.board,
        //   {
        //     name: action.payload.boardName,
        //     image: action.payload.image
        //   }
        // ]
        ...state,
        object: { ...action.payload.object, ...state.object }
      };
    }
    case ADD_STAR: {
      return {
        ...state,
        starBoard: [action.items, ...state.starBoard]
      };
    }
    default:
      return state;
  }
};
