import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { getArticleItem } from '../../actions/articleActions';
import classes from './Article.module.css';
import like from '../../img/Like.png';
import Loader from '../Loader/Loader';

const ArticleFull = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(state => state.articleData.articleObj);
  const isLoading = useSelector(state => state.articleData.isLoading);

  useEffect(() => {
    dispatch(getArticleItem(slug))
  }, [dispatch, slug]);

  const {
    title,
    favoritesCount,
    description,
    body,
    tagList,
    createdAt,
    author
  } = article;

  if(isLoading) return <Loader />;

  return (
    <div className = {classes.article_wrapperFull}>
      <div className={classes.article__container}>
        <div className={classes.article__leftCol}>
          <div className={classes.article__titleContainer}>
            <h2 className={classes.article__title}>
              <Link to="/articles" className={classes.article__link}>
                {title}
              </Link>
            </h2>
            <div className={classes.article__like}>
              <img className={classes.article__likeImg} src={like} alt='like' />
            </div>
            <div className={classes.article__likeCount}>{favoritesCount}</div>
          </div>
          <div className={classes.article__tags}>
            {tagList && tagList.map(tag => <div key={tag} className={classes.article__tagItem}>{tag}</div>)}
          </div>
          <div className={classes.article__description}>{description}</div>
          <div className={classes.article__description}>{body}</div>
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
    </div>
  )};

export default ArticleFull;