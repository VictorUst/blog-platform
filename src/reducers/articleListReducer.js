import {
  SET_ARTICLES_PENDING,
  SET_ARTICLES_FULLFILLED,
  SET_ARTICLES_REJECTED,
  SET_OFFSET
 } from "../actions/articleListActions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: '',
  offset: 0,
  articlesCount: 0
};


const articleListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES_PENDING:
      return {...state, isLoading: payload };
    case SET_ARTICLES_FULLFILLED:
      return {...state, isLoading: false, data: payload.articles, articlesCount: payload.articlesCount };
    case SET_ARTICLES_REJECTED:
      return {...state, isLoading: false, data: [], error: payload };
    case SET_OFFSET:
      return {...state, isLoading: false, offset: payload };
    default:
      return {...state };
  }
}

export default articleListReducer;