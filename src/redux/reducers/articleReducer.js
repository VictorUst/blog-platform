import {
  SET_ARTICLE
 } from "../actions/articleActions";

const initialState = {
  articleObj: {},
};


const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLE:
      return {...state, articleObj: payload.article };
    default:
      return state;
  }
}

export default articleReducer;