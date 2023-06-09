import React, { useEffect, useState } from 'react';

import { fetchMovie } from '../../services/fetchMovies';
import MovieCard from '../MovieCard';
import PaginationBlock from '../PaginationBlock';
import SearchRadetBar from '../SearchRatedBar';

const App = () => {
  const [films, setFilms] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const url = `https://api.themoviedb.org/3/trending/movie/week?language=ru-RU`;
  useEffect(() => fetchMovie(setFilms, url), []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') return;
    const nameUpdate = inputValue.replace(' ', '+');
    const url = `https://api.themoviedb.org/3/search/movie?query=${nameUpdate}&include_adult=false&language=ru-US&page=1&region=ru`;
    fetchMovie(setFilms, url);
  };

  return (
    <>
      <SearchRadetBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <main className="main">
        <MovieCard films={films} />
        <PaginationBlock />
      </main>
    </>
  );
};

export default App;
