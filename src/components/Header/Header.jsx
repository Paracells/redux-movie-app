import React, { useState, useEffect } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import avatar from '/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from './../../features/movies/movieSlice';

function Header() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const submitSearch = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(fetchAsyncMovies(search));
      setSearch('');
    }
  };
  return (
    <div className={style.header}>
      <Link to='/'>Movie App</Link>
      <div className={style.search}>
        <form onSubmit={submitSearch}>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>🔍</button>
        </form>
      </div>
      <div className={style.logo}></div>
      <div className={style.user_image}>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}

export default Header;
