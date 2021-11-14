import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleFull from '../ArticleFull/ArticleFull';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import classes from './App.module.css';

const App = () => (
  <Router>
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        <Route path='/articles'  element={ <ArticleList />} />
        <Route path='/articles/slug'  element={ <ArticleFull />} />
      </Routes>
    </div>
  </Router>
  )


export default App;
