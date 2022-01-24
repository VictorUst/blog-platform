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

const App = () => (
    <Router>
      <div className={classes.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={ <Navigate to="/articles" /> } />
          <Route path='/articles'  element={ <ArticleList /> } />
          <Route path='/articles/:slug'  element={ <ArticleFull /> } />
          <Route path='/sign-in'  element={ <SignInForm /> } />
          <Route path='/sign-up'  element={ <SignUpForm /> } />
          <Route path='/profile'  element={ <EditProfileForm /> } />
          <Route path='/new-article'  element={ <CreateNewArticle /> } />
          <Route path='/articles/:slug/edit'  element={ <EditArticle /> } />
        </Routes>
      </div>
    </Router>
  )

export default App;
