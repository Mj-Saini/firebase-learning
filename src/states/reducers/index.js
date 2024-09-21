import { combineReducers } from "redux";
import countReducer from "./CountReducer";

export const reducers = combineReducers({
  count: countReducer,
});
