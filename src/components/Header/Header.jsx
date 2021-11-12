import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import avatar from '/user.png';

function Header() {
  return (
    <div className={style.header}>
      <Link to='/'>Movie App</Link>
      <div className={style.logo}></div>
      <div className={style.user_image}>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}

export default Header;
