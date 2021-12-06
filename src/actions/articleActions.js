import { getArticle } from "../services/api";

export const SET_ARTICLE_PENDING = 'SET_ARTICLE_PENDING';
export const SET_ARTICLE_FULLFILLED = 'SET_ARTICLE_FULLFILLED';
export const SET_ARTICLE_REJECTED = 'SET_ARTICLE_REJECTED';

export const setArticlePending = (payload) => ({
  type: SET_ARTICLE_PENDING,
  payload
})

export const setArticleFullfilled = (payload) => ({
  type: SET_ARTICLE_FULLFILLED,
  payload
})

export const setArticleRejected = (payload) => ({
  type: SET_ARTICLE_REJECTED,
  payload
})

export const getArticleItem = (slug) => (dispatch) => {
  dispatch(setArticlePending(true));
  getArticle(slug)
      .then((data) => dispatch(setArticleFullfilled(data)))
      .catch((err) => dispatch(setArticleRejected(`error: ${err}`)))
      .finally(dispatch(setArticlePending(false)))
}