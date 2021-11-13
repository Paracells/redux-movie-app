import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '..';
import { getAllMovies } from '../../features/movies/movieSlice';
import style from './MovieListing.module.scss';
function MovieListing() {
  const { Search: movies } = useSelector(getAllMovies);

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
