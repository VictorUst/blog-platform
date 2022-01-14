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
    localStorage.removeItem('token');
    dispatch(logoutUser());
  }

  return (
    <>
      <Link to='/new-profile' className={classes.sign__link}>
        <div className={classes.header__sign}>
            Create Article
        </div>
      </Link>
      <Link to='/profile'>
        {username}
      </Link>
      <Link to='/profile'>
        <img src={image || avatar} alt='avatar' />
      </Link>
      <Link to='/' className={classes.sign__link} onClick={onLogOut}>
        <div className={classes.header__sign}>
            Log out
        </div>
      </Link>
    </>
  );
};

export default UserLogInView;