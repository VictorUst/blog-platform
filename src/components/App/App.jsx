import React from 'react';
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import ArticleFull from '../Article/ArticleFull';
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';
import classes from './App.module.css';

const App = () => (
  <Router>
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/articles" />} exact />
        <Route path='/articles'  element={ <ArticleList />} exact />
        <Route path='/articles/:slug'  element={ <ArticleFull />} exact />
        <Route path='/sign-in'  element={ <SignInForm />} exact />
        <Route path='/sign-up'  element={ <SignUpForm />} exact />
      </Routes>
    </div>
  </Router>
  )


export default App;
