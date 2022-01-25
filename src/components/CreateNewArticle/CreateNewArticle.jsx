import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../services/apiService';
import ArticleForm from '../ArticleForm/ArticleForm';
import classes from './CreateNewArticle.module.css';

const CreateNewArticle = () => {
  const apiService = new ApiService();
  const navigate = useNavigate();
  const { isLogin, userData } = useSelector((state) => state.auth);
  const { token } = userData;
  const [serverError, setServerError] = useState(false);

  if(!isLogin) navigate('/sign-in');

const onSubmit = (data) => {
  apiService.createArticle(data, token).then((response) => {
    if (response.article) {
      console.log(data);
      navigate(`/articles/${response.article.slug}`)
    }
    if (response.errors) setServerError(response.errors)
  })
}

 return (
  <div className={classes.form__container}>
    <h1 className={classes.form__title}>Create new article</h1>
    <ArticleForm article={{tagList: ['']}} onSubmitArticle={(data) => onSubmit(data)} />
    {serverError && <div className={classes.error_message}>Ошибка</div>}
   </div>
 )
}

export default CreateNewArticle;