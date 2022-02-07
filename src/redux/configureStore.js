import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { loadState } from "../helpers";
import rootReducer from "./reducers";
const persistedState = loadState();
export default createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger, thunk)
);
