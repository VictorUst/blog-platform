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
      <div className={classes.header__signIn}>Sign In</div>
      <div className={classes.header__signUp}>Sign Up</div>
    </header>
  )


export default Header;