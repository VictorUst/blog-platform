import ApiService from "../../services/apiService";
import { loadingAction } from "./loadingActions";

export const SET_ARTICLES = 'SET_ARTICLES';

export const setArticleList= (payload) => ({
  type: SET_ARTICLES,
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

