import React, { useEffect, useState } from 'react';
import { Offline, Online } from 'react-detect-offline';

import { fetchMovie } from '../../services/fetchMovies';
import MovieCard from '../MovieCard';
import PaginationBlock from '../PaginationBlock';
import SearchRadetBar from '../SearchRatedBar';

const App = () => {
  const [films, setFilms] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?query=a&include_adult=false&language=ru-US&page=1&region=ru`;
  useEffect(() => fetchMovie(setFilms, url), []);

  return (
    <>
      {/* <Online> */}
      <SearchRadetBar />
      <main className="main">
        <MovieCard films={films} />
        <PaginationBlock />
      </main>
      {/* </Online> */}
      {/* <Offline>Check your internet!</Offline> */}
    </>
  );
};

export default App;
