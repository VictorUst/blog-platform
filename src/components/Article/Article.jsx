import React from 'react';
import classes from './Article.module.css';
import like from '../../img/Like.png';
import avatar from '../../img/Avatar.png';

const Article = () => (
    <div className={classes.article__container}>
      <div className={classes.article__leftCol}>
        <div className={classes.article__titleContainer}>
          <h2 className={classes.article__title}>Some article title</h2>
          <div className={classes.article__like}>
            <img className={classes.article__likeImg} src={like} alt='like' />
          </div>
          <div className={classes.article__likeCount}>12</div>
        </div>
        <div className={classes.article__tags}>
          <div className={classes.article__tagItem}>Tag 1</div>
          <div className={classes.article__tagItem}>Tag 2</div>
        </div>
        <div className={classes.article__description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatibus atque pariatur, et consectetur hic doloribus explicabo illum quos aliquid porro repellendus aliquam eligendi! Hic quo doloremque nulla ipsam maxime.</div>
      </div>
      <div className={classes.article__rightCol}>
        <div className={classes.article__userInfo}>
          <span className={classes.article__userName}>John Snow</span>
          <span className={classes.article__userData}>March 5, 2020</span>
        </div>
        <div className={classes.article__userAvatar}>
          <img className={classes.article__userAvatarImg} src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  )


export default Article;