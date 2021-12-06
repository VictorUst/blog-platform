import { combineReducers } from "redux";
import articleListReducer from "./articleListReducer";
import articleReducer from "./articleReducer";

const allReducers = combineReducers({
  articleData: articleReducer,
  articles: articleListReducer
})

export default allReducers;