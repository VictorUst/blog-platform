import React from 'react';
import {  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../../containers/ArticlesPage';
import ArticleFull from '../ArticleFull/ArticleFull';
import Header from '../Header/Header';
import classes from './App.module.css';

const App = () => (
  <Router>
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/articles" />} exact />
        <Route path='/articles'  element={ <ArticlesPage />} />
        <Route path='/articles/slug'  element={ <ArticleFull />} />
      </Routes>
    </div>
  </Router>
  )


export default App;
