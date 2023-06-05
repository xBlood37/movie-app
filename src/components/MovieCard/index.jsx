import './movieCard.css';

import React, { useEffect, useState } from 'react';

import fetchMovie from '../../services/fetchMovies';
import CardItem from '../CardItem';

function MovieCard() {
  const [films, setFilms] = useState([]);

  try {
    useEffect(() => {
      fetchMovie(setFilms);
    }, []);
  } catch (error) {
    throw new Error('Api is not working' + error + error.message);
  }

  return (
    <ul className="movie-card">
      <CardItem items={films} />
    </ul>
  );
}

export default MovieCard;
