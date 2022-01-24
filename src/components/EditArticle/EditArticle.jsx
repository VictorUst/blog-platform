import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../services/apiService';
import ArticleForm from '../ArticleForm/ArticleForm';
import { getArticleItem } from '../../redux/actions/articleActions';
import classes from './EditArticle.module.css';

const EditArticle = () => {
  const apiService = new ApiService();
  const [serverError, setServerError] = useState(false);
  const { userData } = useSelector(state => state.auth);
  const { token } = userData;
  const article = useSelector(state => state.article.articleObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getArticleItem(slug));
  }, [dispatch, slug]);

  const onSubmit = ((data) => {
    apiService.editArticle(data, token, slug).then((response) => {
      if (response.article) {
        console.log(data);
        navigate(`/articles/${response.article.slug}`)
      }
      if (response.errors) setServerError(response.errors)
    })
  })

  return (
    <>
      <ArticleForm article={article} onSubmitArticle={(data) => onSubmit(data)} />
      {serverError && <div className={classes.error_message}>Ошибка</div>}
    </>
  )
}

export default EditArticle;