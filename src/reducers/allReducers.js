import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

const allReducers = combineReducers({
  articlesData: articleReducer
})

export default allReducers;