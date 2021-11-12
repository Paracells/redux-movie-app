import React from 'react';

function MovieCard({ Title, Year, Poster }) {
  return (
    <div>
      <h2>{Title}</h2>
      <h3>{Year}</h3>
      <img src={Poster} alt={Title} />
    </div>
  );
}

export default MovieCard;
