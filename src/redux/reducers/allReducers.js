import { combineReducers } from "redux";
import articleListReducer from "./articleListReducer";
import articleReducer from "./articleReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

const allReducers = combineReducers({
  articleData: articleReducer,
  articles: articleListReducer,
  auth: authReducer,
  loading: loadingReducer
})

export default allReducers;