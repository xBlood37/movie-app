import './movieCard.css';

import { Spin } from 'antd';
import React from 'react';

import CardItem from '../CardItem';

function MovieCard({ films }) {
  return <ul className="movie-card">{films.length !== 0 ? <CardItem items={films} /> : <Spin className="spin" size="large" />}</ul>;
}

export default MovieCard;
