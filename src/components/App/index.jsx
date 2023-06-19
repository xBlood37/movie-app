import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { fetchMovie } from '../../services/fetchMovies';
import MovieCard from '../MovieCard';
import ScrollToTop from '../ScrollToTop';
import SearchRadetBar from '../SearchRatedBar';

// Поиск должен происходить сразу после того, как пользователь ввел поисковый запрос (без нажатия на кнопку)
// При вводе символов в поле ввода запросы не должны отправляться сразу в целях избежания лишних запросов на сервер. Дождитесь, пока пользователь допечатает.
// Если поиск не дал результатов, должно отображаться сообщение об этом

const App = () => {
  const [films, setFilms] = useState([]);
  const [current, setCurrent] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    try {
      if (fetching) {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
          },
        };
        const url = `https://api.themoviedb.org/3/trending/movie/week?language=ru-RU&page=${current}`;
        axios.get(url, options).then(({ data }) => {
          setFilms([...films, ...data.results]);
        });
        setCurrent((prevState) => prevState + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

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
      <header className="header">
        <SearchRadetBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </header>
      <main className="main">
        <MovieCard films={films} />
      </main>
      <ScrollToTop />
    </>
  );
};

export default App;
