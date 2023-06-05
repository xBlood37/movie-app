import axios from 'axios';

export default function fetchMovie(setFilms) {
  const url = 'https://api.themoviedb.org/3/search/movie?query=a&include_adult=false&language=en-US&page=1&region=en';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
    },
  };

  axios.get(url, options).then(({ data }) => {
    setFilms(data.results);
  });
}
