const { ADDED, DELETE, TOGGLE, ALLCOMPLETE, CLEARCOMPLETE } = require("./actionTypes");
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

    case TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETE:
        return state.map(todo=>{
            return {
                ...todo,
                completed:true
            }
        })
    case CLEARCOMPLETE:
        return state.filter(todo=>!todo.completed)
    default:
      return state;
  }
};

export default reducer;
