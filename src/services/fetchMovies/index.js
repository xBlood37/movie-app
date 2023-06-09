import axios from 'axios';

export function fetchMovie(setFilms, url) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
    },
  };

  const errorHandler = (err) => {
    console.error(`Axios request failed, please check your api or url: ${err.stack}', `);
    if (err.response) console.error('Response error, please check your api or url: ', err.response.data, err.response.status, err.response.headers);
    if (err.request) console.error('Request error, please check your api or url: ', err.request);
  };

  axios
    .get(url, options)
    .catch((error) => errorHandler(error))
    .then(({ data }) => {
      setFilms(data.results);
    });

  window.scrollTo(0, 0);
}
