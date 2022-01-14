import ApiService from "../../services/apiService";
import { loadingAction } from "./loadingActions";

export const SET_ARTICLE = 'SET_ARTICLE';

export const setArticle = (payload) => ({
  type: SET_ARTICLE,
  payload
})

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