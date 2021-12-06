import {
  SET_ARTICLES_PENDING,
  SET_ARTICLES_FULLFILLED,
  SET_ARTICLES_REJECTED
 } from "../actions/articleListActions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: ''
};


const articleListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES_PENDING:
      return {...state, isLoading: payload };
    case SET_ARTICLES_FULLFILLED:
      return {...state, isLoading: false, data: payload.articles };
    case SET_ARTICLES_REJECTED:
      return {...state, isLoading: false, data: [], error: payload }
    default:
      return {...state};
  }
}

export default articleListReducer;