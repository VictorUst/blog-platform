import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'antd';
import { getArticles } from '../../actions/articleListActions';
import Article from '../Article/Article';
import classes from './ArticleList.module.css';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.data);
  const isLoading = useSelector(state => state.articles.isLoading);
  const articlesCount = useSelector(state => state.articles.articlesCount);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getArticles(page))
  }, [dispatch, page]);

  const onPageChanged = (curPage) => {
    setPage(curPage);
  }

  if(isLoading) return <div>Loading...</div>;

  return (
    <main className={classes.main}>{
      articles &&
      articles.map((article) => <Article key={article.slug} article={article} />)
    }
    <Pagination
      className={classes.pagination}
      onChange={onPageChanged}
      total={articlesCount/5}
      current={page}
      showSizeChanger={false}
    />
    </main>
  )
}


export default ArticleList;
