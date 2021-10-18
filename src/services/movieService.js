import http from './httpService';
import { apiURL } from '../config.json';
import { getGenres } from './genreService';

const apiEndpoint = `${apiURL}/movies`;

function movieURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export async function getMovie(movieId) {
  return http.get(movieURL(movieId));
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return http.put(movieURL(movie._id), body);
  }

  // Otherwise we're dealing with a new movie
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieURL(movieId));
}
