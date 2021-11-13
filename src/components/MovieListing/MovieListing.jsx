import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '..';
import style from './MovieListing.module.scss';
function MovieListing() {
  const {
    movies: { Search: movies },
  } = useSelector((state) => state.movies);
  return (
    <div className={style.movie_wrapper}>
      <div className={style.movie_list}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieListing;
