import React from 'react';
import Article from '../Article/Article';
import classes from './ArticleList.module.css';

const ArticleList = () => (
    <main className={classes.main}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </main>
  )


export default ArticleList;