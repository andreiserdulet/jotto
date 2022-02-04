import { actionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RESET_GAME:
      return action.payload;

    default:
      return state;
  }
};
