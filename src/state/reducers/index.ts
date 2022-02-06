import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import targetAchievedReducer from "./targetArchievedReducer";

const reducers = combineReducers({
  todos: todoReducer,
  isTargetAchieved: targetAchievedReducer,
});

export default reducers;
