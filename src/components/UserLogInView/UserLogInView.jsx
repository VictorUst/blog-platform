import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import classes from './UserLogInView.module.css';
import avatar from '../../img/Avatar.png';

const UserLogInView = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { username, image } = userData;

  const onLogOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  }

  return (
    <>
      <Link to='/new-article' className={classes.createArticle__link}>
        <div className={classes.createArticle__title}>
            Create Article
        </div>
      </Link>
      <div className={classes.profile__container}>
        <Link to='/profile' className={classes.profile__link}>
          {username}
          <img className={classes.profileImg} src={image || avatar} alt='avatar' />
        </Link>
      </div>
      <Link to='/' className={classes.sign__link} onClick={onLogOut}>
        <div className={classes.header__sign}>
            Log out
        </div>
      </Link>
    </>
  );
};

export default UserLogInView;