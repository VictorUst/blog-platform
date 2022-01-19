import {
  SET_ARTICLE,
  SET_ARTICLES,
  CREATE_ARTICLE
 } from "../actions/articleActions";

const initialState = {
  articleObj: {},
  data: [],
  articlesCount: 0
};


const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES:
      return {...state, data: payload.articles, articlesCount: payload.articlesCount };
    case SET_ARTICLE:
      return {...state, articleObj: payload.article };
    case CREATE_ARTICLE:
      return {...state, articleObj: payload.article };
    default:
      return state;
  }
}

export default articleReducer;