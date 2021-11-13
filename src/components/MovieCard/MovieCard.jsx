import React from 'react';
import style from './MovieCard.module.scss';

function MovieCard({ Title, Year, Poster }) {
  return (
    <div className={style.item}>
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
    </div>
  );
}

export default MovieCard;
