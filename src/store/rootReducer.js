// src/store/reducers/rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./userReducer"; // istifadəçi reducer-i
import todoReducer from "./todoReducer"; // todo reducer-i

// Bütün reducləri birləşdiririk
const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

export default rootReducer;
