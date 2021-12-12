import { getArticlesList } from "../services/api";

export const SET_ARTICLES_PENDING = 'SET_ARTICLES_PENDING';
export const SET_ARTICLES_FULLFILLED = 'SET_ARTICLES_FULLFILLED';
export const SET_ARTICLES_REJECTED = 'SET_ARTICLES_REJECTED';
export const SET_ARTICLES_COUNT = 'SET_ARTICLES_COUNT';
export const SET_OFFSET = 'SET_OFFSET';
export const CHANGE_PAGE = 'CHANGE_PAGE';


export const setArticlesPending = (payload) => ({
  type: SET_ARTICLES_PENDING,
  payload
})

export const setArticlesFullfilled = (payload) => ({
  type: SET_ARTICLES_FULLFILLED,
  payload
})

export const setArticlesRejected = (payload) => ({
  type: SET_ARTICLES_REJECTED,
  payload
})

export const changePage = (payload) => ({
  type: CHANGE_PAGE,
  payload
})

export const setArticlesCount = (payload) => ({
  type: SET_ARTICLES_COUNT,
  payload
})

export const setOffset = (payload) => ({
  type: SET_OFFSET,
  payload
})

export const getArticles = (offset) => (dispatch) => {
  dispatch(setArticlesPending(true));
  getArticlesList(offset)
      .then((data) => dispatch(setArticlesFullfilled(data)))
      .catch((err) => dispatch(setArticlesRejected(`error: ${err}`)))
      .finally(dispatch(setArticlesPending(false)))
}

