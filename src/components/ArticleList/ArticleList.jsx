import React, {useState, useEffect} from 'react';

import { getArticles } from '../../services/api';
import Article from '../Article/Article';
import classes from './ArticleList.module.css';


const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const getResource = async () => {
    const response = await getArticles();
    const resData = response.articles.map(({ slug, title, description, tagList, author }) =>
        ({ slug, title, description, tagList, author }));
    setArticles(resData);
  }

  useEffect(() => {
    getResource();
  }, []);

  return (
    <main className={classes.main}>{
      articles &&
      articles.map((article) => <Article key={article.slug} article={article} />)
    }
    </main>
  )
}


export default ArticleList;

