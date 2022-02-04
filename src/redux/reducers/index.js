import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWordReducer";
import secretWord from "./secretWordReducer";
import resetReducer from "./resetReducer";
export default combineReducers({
  success,
  guessedWords,
  secretWord,
  resetReducer,
});
