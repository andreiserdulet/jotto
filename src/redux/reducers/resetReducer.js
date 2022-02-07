import { actionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RESET_GAME:
      localStorage.clear();
      return action.payload;

    default:
      return state;
  }
};
