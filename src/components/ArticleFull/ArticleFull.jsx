import React from 'react';
import classes from './ArticleFull.module.css';
import like from '../../img/Like.png';
import avatar from '../../img/Avatar.png';

const ArticleFull = () => (
  <div className={classes.articleFull__container}>
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
    <div className={classes.articleFull__description}>
          Est Ampyciden pater patent
          Amor saxa inpiger
          Lorem markdownum Stygias neque is referam fudi, breve per. Et Achaica tamen: nescia ista occupat, illum se ad potest humum et.

          Qua deos has fontibus
          Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus pedum.

          Quamvis pronuba
          Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic, Methymnaeae.

            1. Clamoribus haesit tenentem iube Haec munera
            2. Vincla venae
            3. Paris includere etiam tamen
            4. Superi te putria imagine Deianira
            5. Tremore hoste Esse sed perstat capillis siqua
    </div>
  </div>
  )


export default ArticleFull;