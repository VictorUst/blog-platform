import React from 'react';
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import classes from './App.module.css';
import ArticleList from '../ArticleList/ArticleList';
import ArticleFull from '../ArticleFull/ArticleFull';
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import CreateNewArticle from '../CreateNewArticle/CreateNewArticle';
import EditArticle from '../EditArticle/EditArticle';
import routes from '../../utils/routes';

const App = () => {
  const { root, articles, article, signIn, signUp, editProfile, createNewArticle, editArticle } = routes;

  return (
      <Router>
        <div className={classes.wrapper}>
          <Header />
          <Routes>
            <Route path={root} element={ <Navigate to={articles} /> } />
            <Route path={articles}  element={ <ArticleList /> } />
            <Route path={article}  element={ <ArticleFull /> } />
            <Route path={signIn}  element={ <SignInForm /> } />
            <Route path={signUp}  element={ <SignUpForm /> } />
            <Route path={editProfile}  element={ <EditProfileForm /> } />
            <Route path={createNewArticle}  element={ <CreateNewArticle /> } />
            <Route path={editArticle}  element={ <EditArticle /> } />
          </Routes>
        </div>
      </Router>
    )
}
export default App;
