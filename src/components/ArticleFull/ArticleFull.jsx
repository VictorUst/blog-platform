import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { getArticleItem } from '../../redux/actions/articleActions';
import { loadingAction } from '../../redux/actions/loadingActions';
import ApiService from '../../services/apiService';
import classes from './ArticleFull.module.css';
import Like from '../Like/Like';
import Loader from '../Loader/Loader';
import warning from '../../img/warning.svg';

const ArticleFull = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const article = useSelector(state => state.article.articleObj);
  const isLoading = useSelector(state => state.loading.isLoading);
  const user = useSelector(state => state.auth.userData);
  const apiService = new ApiService();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const {
    title,
    favorited,
    favoritesCount,
    description,
    body,
    tagList,
    createdAt,
    author
  } = article;

  const { token } = user;

  useEffect(() => {
    dispatch(getArticleItem(slug))
  }, [dispatch, slug]);

  const onDelete = () => {
    apiService.deleteArticle(token, slug);
    dispatch(loadingAction(true));
    setTimeout(() => {
      navigate('/articles');
      dispatch(loadingAction(false));
    }, 100);
    setShowDeleteMessage(false);
  }

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
          <Like slug={article.slug} favorited={favorited} favoritesCount={favoritesCount} />
          </div>
          <div className={classes.article__tags}>
            {tagList && tagList.map(tag => <div key={tag} className={classes.article__tagItem}>{tag}</div>)}
          </div>
          <div className={classes.article__bodyContainer}>
            <div className={classes.article__description}>{description}</div>
            <div className={classes.article__body}>{body}</div>
          </div>
        </div>
        <div className={classes.article__rightCol}>
          <div className={classes.article__userContainer}>
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
          {(author && author.username) === user.username &&
            <div className={classes.article__button__container}>
              <button
               type='button'
               className={`${classes.article__button} ${classes.article__button__delete}`}
               onClick={() => setShowDeleteMessage(true)}
              >
                Delete
              </button>
              {showDeleteMessage &&
                <div className={classes.modalMessage__container}>
                  <div className={classes.modalMessage__header}>
                    <img className={classes.modalMessage__img} src={warning} alt='' />
                    <div className={classes.modalMessage__title}>Are you sure to delete this article?</div>
                  </div>
                  <div className={classes.modalMessage__buttons}>
                    <button
                      type='button'
                      className={classes.modalMessage__buttonNo}
                      onClick={() => setShowDeleteMessage(false)}
                    >No
                    </button>
                    <button
                      type='button'
                      className={classes.modalMessage__buttonYes}
                      onClick={() => onDelete()}
                    >Yes
                    </button>
                  </div>
                </div>
              }
              <Link
                to={`/articles/${slug}/edit`}
                className={`${classes.article__button} ${classes.article__button__edit}`}
              >
                Edit
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )};

export default ArticleFull;