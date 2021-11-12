import React, { useEffect } from 'react';
import { MovieListing } from '..';
import style from './Home.module.scss';
import api from './../../common/api/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
function Home() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const { data } = await api.get('Harry');
    dispatch(addMovies(data));
  }, []);

  return (
    <>
      <div className={style.banner}></div>
      <MovieListing />
    </>
  );
}

export default Home;
