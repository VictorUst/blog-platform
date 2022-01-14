import {
  SET_ARTICLES
 } from "../actions/articleListActions";

const initialState = {
  data: [],
  articlesCount: 0
};


const articleListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES:
      return {...state, data: payload.articles, articlesCount: payload.articlesCount };
    default:
      return state;
  }
}

export default articleListReducer;