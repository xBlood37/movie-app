import './movieCard.css';

import { Spin } from 'antd';
import React from 'react';

import CardItem from '../CardItem';

function MovieCard({ films }) {
  return (
    <>
      {films.length ? (
        <ul className="movie-card">
          <CardItem items={films} />
        </ul>
      ) : (
        <div className="spin-block">
          <Spin className="spin" size="large" />
        </div>
      )}
    </>
  );
}

export default MovieCard;
