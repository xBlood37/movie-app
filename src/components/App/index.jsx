import React, { useEffect, useState } from 'react';
import { Offline, Online } from 'react-detect-offline';

import fetchMovie from '../../services/fetchMovies';
import MovieCard from '../MovieCard';
import PaginationBlock from '../PaginationBlock';
import SearchRadetBar from '../SearchRatedBar';

const App = () => {
  const [films, setFilms] = useState([]);
  const url = 'https://api.themoviedb.org/3/search/movie?query=a&include_adult=false&language=en-US&page=1&region=en';

  try {
    useEffect(() => fetchMovie(setFilms, url), []);
  } catch (error) {
    throw new Error('Api is not working' + error + error.message);
  }

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
