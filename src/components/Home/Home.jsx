import React, { useEffect, useState } from 'react';
import { MovieListing } from '..';
import style from './Home.module.scss';
import api from './../../common/api/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    const { data } = await api.get('Avatar');
    dispatch(addMovies(data));
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className={style.banner}></div>
      <h2 className={style.title}>Movies</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieListing />
        </div>
      )}
    </>
  );
}

export default Home;
