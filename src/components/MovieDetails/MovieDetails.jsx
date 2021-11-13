import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovieDetail } from '../../features/movies/movieSlice';

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { movieDetail: data } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID));
  }, []);
  return <div>movie detail</div>;
}

export default MovieDetails;
