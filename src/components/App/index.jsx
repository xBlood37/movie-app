import React from 'react';
import { Offline, Online } from 'react-detect-offline';

import MovieCard from '../MovieCard';
import PaginationBlock from '../PaginationBlock';
import SearchRadetBar from '../SearchRatedBar';

const App = () => {
  return (
    <>
      <Online>
        <SearchRadetBar />
        <main className="main">
          <MovieCard />
          <PaginationBlock />
        </main>
      </Online>
      <Offline>Check ypur internet!</Offline>
    </>
  );
};

export default App;
