import ApiService from "../../services/apiService";
import { loadingAction } from "./loadingActions";

export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_ARTICLE = 'SET_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const FAVORITE_ARTICLE = 'FAVORITE_ARTICLE';

export const setArticleList= (payload) => ({
  type: SET_ARTICLES,
  payload
})

export const setArticle = (payload) => ({
  type: SET_ARTICLE,
  payload
})

export const createArticle = (payload) => ({
  type: CREATE_ARTICLE,
  payload
})

export const favoriteArticle = (payload) => ({
  type: FAVORITE_ARTICLE,
  payload
})

export const getArticles = (offset) => (dispatch) => {
  const apiService = new ApiService();
  dispatch(loadingAction(true));
  apiService.getArticlesList(offset)
      .then((response) => {
        if(response.status === 200) {
          throw new Error('No Internet');
        }
        dispatch(setArticleList(response));
        dispatch(loadingAction(false));
      })
      .catch(() => dispatch(loadingAction(true)));
};

export const getArticleItem = (slug) => (dispatch) => {
  const apiService = new ApiService();
  dispatch(loadingAction(true));
  apiService.getArticle(slug)
      .then((response) => {
        if(response.status === 200) {
          throw new Error('No Internet');
        }
        dispatch(setArticle(response));
        dispatch(loadingAction(false));
      })
      .catch(() => dispatch(loadingAction(true)));
}

export const favoritesArticle = (token, slug) => (dispatch) => {
  const apiService = new ApiService();
  apiService.likeArticle(token, slug)
      .then((response) => {
        dispatch(favoriteArticle(response.article));
      })
}

export const unfavoritesArticle = (token, slug) => (dispatch) => {
  const apiService = new ApiService();
  apiService.dislikeArticle(token, slug)
      .then((response) => {
        dispatch(favoriteArticle(response.article));
      })
}