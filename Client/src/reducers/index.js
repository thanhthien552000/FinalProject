import { useReducer } from "react";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  user: useReducer,
});

export default rootReducer;
