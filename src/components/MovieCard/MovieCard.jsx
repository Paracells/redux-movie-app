import React from 'react';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.scss';

function MovieCard({ Title, Year, Poster, imdbID }) {
  return (
    <div className={style.item}>
      <Link to={`/movie/${imdbID}`}>
        <div className={style.inner}>
          <div className={style.top}>
            <img src={Poster} alt={Title} />
          </div>
          <div className={style.bottom}>
            <div className={style.info}>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
