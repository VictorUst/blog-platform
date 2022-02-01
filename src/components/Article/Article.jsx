import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { format } from 'date-fns';
import classes from './Article.module.css';
import Like from '../Like/Like';

const Article = ({ article }) => {
  const {
    slug,
    title,
    favoritesCount,
    favorited,
    description,
    tagList,
    createdAt,
    author
  } = article;

  return (
    <div className={classes.article__container}>
      <div className={classes.article__leftCol}>
        <div className={classes.article__titleContainer}>
          <h2 className={classes.article__title}>
            <Link to={`/articles/${slug}`} className={classes.article__link}>
              {title}
            </Link>
          </h2>
        <Like slug={slug} favorited={favorited} favoritesCount={favoritesCount} />
        </div>
        <div className={classes.article__tags}>
          {tagList && tagList.map(tag => <div key={tag} className={classes.article__tagItem}>{tag}</div>)}
        </div>
        <div className={classes.article__description}>{description}</div>
      </div>
      <div className={classes.article__rightCol}>
        <div className={classes.article__userInfo}>
          <span className={classes.article__userName}>{author && author.username}</span>
          <span className={classes.article__userData}>
            {createdAt && format(new Date(createdAt), 'hh:mm MMMMMM dd') }
          </span>
        </div>
        <div className={classes.article__userAvatar}>
          <img className={classes.article__userAvatarImg} src={author && author.image} alt='avatar' />
        </div>
      </div>
    </div>
  )};

export default Article;

Article.propTypes = {
  article:
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      favoritesCount: PropTypes.number,
      favorited: PropTypes.bool,
      description: PropTypes.string,
      createdAt: PropTypes.string,
      tagList: PropTypes.arrayOf,
      author: PropTypes.shape({
        username: PropTypes.string,
        image: PropTypes.string
      })
    }).isRequired
}