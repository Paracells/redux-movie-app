import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '..';

function MovieListing() {
  const { Search: movies } = useSelector((state) => state.movies.movies);
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default MovieListing;

/*
Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
Title: "Harry Potter and the Order of the Phoenix"
Type: "movie"
Year: "2007"
imdbID: "tt0373889"
*/
