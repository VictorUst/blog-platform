import React from 'react';
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ArticlesContainer from '../../containers/ArticlesContainer';
import ArticleFull from '../ArticleFull/ArticleFull';
import Header from '../Header/Header';
import classes from './App.module.css';

const App = () => (
  <Router>
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/articles" />} exact />
        <Route path='/articles'  element={ <ArticlesContainer />} />
        <Route path='/articles/slug'  element={ <ArticleFull />} />
      </Routes>
    </div>
  </Router>
  )


export default App;
