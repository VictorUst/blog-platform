import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

const allReducers = combineReducers({
  article: articleReducer,
  auth: authReducer,
  loading: loadingReducer
})

export default allReducers;