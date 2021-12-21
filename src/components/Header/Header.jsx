import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => (
    <header className={classes.header}>
      <div className={classes.header__title}>
        <Link to='/' className={classes.header__link}>
          Realworld Blog
        </Link>
      </div>
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
    </header>
  )


export default Header;