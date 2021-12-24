import apiService from "../services/apiService";

export const SET_ARTICLES_PENDING = 'SET_ARTICLES_PENDING';
export const SET_ARTICLES_FULLFILLED = 'SET_ARTICLES_FULLFILLED';
export const SET_ARTICLES_REJECTED = 'SET_ARTICLES_REJECTED';

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

export const getArticles = (offset) => (dispatch) => {
  dispatch(setArticlesPending(true));
  apiService.getArticlesList(offset)
      .then((data) => dispatch(setArticlesFullfilled(data)))
      .catch((err) => dispatch(setArticlesRejected(`error: ${err}`)))
      .finally(dispatch(setArticlesPending(false)))
}

