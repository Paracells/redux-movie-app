import React, { useEffect } from 'react';
import { Loader, MovieListing } from '..';
import style from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.movies);
  useEffect(() => dispatch(fetchAsyncMovies()), [dispatch]);
  return (
    <>
      <div className={style.banner}></div>
      <h2 className={style.title}>Movies</h2>
      {isLoading ? <Loader /> : <MovieListing />}
    </>
  );
}

export default Home;
