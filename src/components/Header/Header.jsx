import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions/authActions';
import classes from './Header.module.css';
import UserLogOutView from '../UserLogOutView/UserLogOutView';
import UserLogInView from '../UserLogInView/UserLogInView';

const Header = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      dispatch(loginUser(JSON.parse(localStorage.getItem('user'))));
    }
  }, [dispatch]);

  return (
    <header className={classes.header}>
      <div className={classes.header__title}>
        <Link to='/' className={classes.header__link}>
          Realworld Blog
        </Link>
      </div>
      { isLogin ? <UserLogInView /> : <UserLogOutView /> }
    </header>
  )
};

export default Header;