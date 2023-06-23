import axios from 'axios';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';

import MovieCard from '../MovieCard';
import ScrollToTop from '../ScrollToTop';
import SearchRadetBar from '../SearchRatedBar';

const App = () => {
  const [films, setFilms] = useState([]);
  const [current, setCurrent] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
    },
  };

  const baseUrl = `https://api.themoviedb.org/3/`;

  // dynamic pagination
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      const url = `${baseUrl}trending/movie/week?language=ru-RU&page=${current}`;
      axios
        .get(url, options)
        .then(({ data }) => {
          setFilms([...films, ...data.results]);
        })
        .catch((error) => console.log(error))
        .finally(setFetching(false));
      setCurrent((prevState) => prevState + 1);
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  // Search
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const url = `${baseUrl}search/movie?query=${inputValue}&include_adult=false&language=ru-US&region=ru`;
    const res = axios.get(url, options).then(({ data }) => data.results);
    res.then((item) => {
      if (item.length === 0) return;
      setFilms([...item]);
    });
  }, [inputValue]);

  return (
    <>
      <header className="header">
        <SearchRadetBar handleChange={debounce((e) => handleChange(e), 320)} />
      </header>
      <main className="main">
        <MovieCard films={films} />
      </main>
      <ScrollToTop />
    </>
  );
};

export default App;
