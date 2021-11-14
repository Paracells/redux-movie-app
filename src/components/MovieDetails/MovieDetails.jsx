import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  cleanMovieDetail,
  fetchMovieDetail,
} from '../../features/movies/movieSlice';
import style from './MovieDetails.module.scss';
function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { movieDetail: data } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID));
    return () => {
      dispatch(cleanMovieDetail());
    };
  }, []);
  return (
    <div className={style.section}>
      <div className={style.left}>
        <div className={style.title}>{data.Title}</div>
        <div className={style.rating}>
          <span>IMDB Rating ⭐ {data.imdbRating}</span>
          <span>IMDB Votes 👍 {data.imdbVotes}</span>
          <span>IMDB Runtime 🎞️ {data.Runtime}</span>
          <span>IMDB Year 📅{data.Year}</span>
        </div>
        <div className={style.plot}>{data.Plot}</div>
        <div className={style.info}>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
}

export default MovieDetails;
