import {
  SET_ARTICLE,
  SET_ARTICLES,
  CREATE_ARTICLE,
  FAVORITE_ARTICLE
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
    case FAVORITE_ARTICLE:
      return {...state, data: state.data.map((item) => item.slug === payload.slug ? payload : item)};
    default:
      return state;
  }
}

export default articleReducer;