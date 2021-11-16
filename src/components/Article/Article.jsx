import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Article.module.css';
import like from '../../img/Like.png';
import avatar from '../../img/Avatar.png';


const Article = ({ article }) => {
  const {
    title,
    description,
    tagList
  } = article;
  return (
    <div className={classes.article__container}>
      <div className={classes.article__leftCol}>
        <div className={classes.article__titleContainer}>
          <h2 className={classes.article__title}>
            <Link to='/articles/slug'>
              {title}
            </Link>
          </h2>
          <div className={classes.article__like}>
            <img className={classes.article__likeImg} src={like} alt='like' />
          </div>
          <div className={classes.article__likeCount}>12</div>
        </div>
        <div className={classes.article__tags}>
          {tagList.map(tag => <div className={classes.article__tagItem}>{tag}</div>)}
        </div>
        <div className={classes.article__description}>{description}</div>
      </div>
      <div className={classes.article__rightCol}>
        <div className={classes.article__userInfo}>
          <span className={classes.article__userName}>John Snow</span>
          <span className={classes.article__userData}>March 5, 2020</span>
        </div>
        <div className={classes.article__userAvatar}>
          <img className={classes.article__userAvatarImg} src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  )
};

export default Article;

Article.propTypes = {
  article:
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      tagList: PropTypes.arrayOf,
    }).isRequired
}