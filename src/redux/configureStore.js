import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// logger.createLogger();
export default createStore(
  rootReducer,

  applyMiddleware(logger, thunk)
);
