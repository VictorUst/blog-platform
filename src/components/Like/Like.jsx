import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import classes from './Like.module.css';
import likeImg from '../../img/Like.png';
import dislikeImg from '../../img/Dislike.png';
import { favoritesArticle, unfavoritesArticle } from '../../redux/actions/articleActions';

const Like = ({ slug, favorited, favoritesCount }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth.userData);
  const { isLogin } = useSelector(state => state.auth);
  const [isLikeDisabled, setIsLikeDisabled] = useState(true);

  useEffect(() => {
    if(isLogin) {
      setIsLikeDisabled(false);
    }
  }, [isLogin]);
  return (
    <>
      { !favorited ?
            <button
                className={classes.article__like}
                type='button'
                onClick={() => dispatch(favoritesArticle(token, slug))}
                disabled={isLikeDisabled}
              >
              <img className={classes.article__likeImg} src={dislikeImg} alt='dislike' />
            </button> :
            <button
                className={classes.article__like}
                type='button'
                onClick={() => dispatch(unfavoritesArticle(token, slug))}
                disabled={isLikeDisabled}
              >
              <img className={classes.article__likeImg} src={likeImg} alt='like' />
            </button>
          }
          <div className={classes.article__likeCount}>{favoritesCount}</div>
    </>
  )
}

export default Like;

Like.propTypes = {
  slug: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired
}