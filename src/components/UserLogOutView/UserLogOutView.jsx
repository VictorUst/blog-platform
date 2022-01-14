import React from 'react';
import { Link } from 'react-router-dom';
import classes from './UserLogOutView.module.css';

const UserLogOutView = () => (
  <>
  <Link to='/sign-in' className={classes.sign__link}>
    <div className={classes.header__sign}>
        Sign In
    </div>
  </Link>
  <Link to='/sign-up' className={classes.sign__link}>
    <div className={classes.header__sign}>
        Sign Up
    </div>
  </Link>
</>
);

export default UserLogOutView;