import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import classes from './ArticleList.module.css';


const ArticleList = ({ articles }) => (
    <main className={classes.main}> {
      articles.map((article) => <Article key={article.slug} article={article} />)
    }
    </main>
  )


export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired
}