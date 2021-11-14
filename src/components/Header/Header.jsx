import React from 'react';
import classes from './Header.module.css';

const Header = () => (
    <header className={classes.header}>
      <div className={classes.header__title}>Realworld Blog</div>
      <div className={classes.header__signIn}>Sign In</div>
      <div className={classes.header__signUp}>Sign Up</div>
    </header>
  )


export default Header;