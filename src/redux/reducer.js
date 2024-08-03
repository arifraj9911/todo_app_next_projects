const { ADDED, DELETE } = require("./actionTypes");
import { initialState } from "./initialState";


const nextId = (todo) => {
  const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
