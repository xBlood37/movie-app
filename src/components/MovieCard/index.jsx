import './movieCard.css';

import React from 'react';

import CardItem from '../CardItem';

function MovieCard({ films }) {
  return (
    <ul className="movie-card">
      <CardItem items={films} />
    </ul>
  );
}

export default MovieCard;
