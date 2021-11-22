import { SET_ARTICLES } from "../actions/actions";

const initialState = {};

const articleReducer = (state = initialState, { type, articles }) => {
  switch (type) {
    case SET_ARTICLES:
      return {...state, articles };
    default:
      return state;
  }
}

export default articleReducer;