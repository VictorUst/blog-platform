import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../actions/articleListActions';
import Article from '../Article/Article';
import classes from './ArticleList.module.css';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.data);
  const isLoading = useSelector(state => state.articles.isLoading);

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch]);
 
  if(isLoading) return <div>Loading...</div>;

  return (
    <main className={classes.main}>{
      articles &&
      articles.map((article) => <Article key={article.slug} article={article} />)
    }
    </main>
  )
}


export default ArticleList;
