import {
  SET_ARTICLE_PENDING,
  SET_ARTICLE_FULLFILLED,
  SET_ARTICLE_REJECTED
 } from "../actions/articleActions";

const initialState = {
  articleObj: {},
  isLoading: false,
  isError: false,
  error: ''
};


const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLE_PENDING:
      return {...state, isLoading: true };
    case SET_ARTICLE_FULLFILLED:
      return {...state, isLoading: false, articleObj: payload.article };
    case SET_ARTICLE_REJECTED:
      return {...state, isLoading: false, articleObj: {}, error: payload }
    default:
      return {...state};
  }
}

export default articleReducer;