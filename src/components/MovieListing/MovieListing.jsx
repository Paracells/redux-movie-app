import React from 'react';
import { useSelector } from 'react-redux';
import { Message, MovieCard } from '..';
import style from './MovieListing.module.scss';
function MovieListing() {
  const {
    movies: { Search: movies },
  } = useSelector((state) => state.movies);
  return (
    <div className={style.movie_wrapper}>
      <div className={style.movie_list}>
        {movies ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
        ) : (
          <Message text='Not found' />
        )}
      </div>
    </div>
  );
}

export default MovieListing;
