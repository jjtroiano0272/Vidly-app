import http from './httpService';
import { apiURL } from '../config.json';
import { getGenres } from './genreService';

const apiEndpoint = `${apiURL}/movies`;

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}

// TODO:
export async function getMovie(movieId) {
  return http.get(`${apiEndpoint}/${movieId}`);
}
export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${apiEndpoint}/${movie._id}`, body);
  }

  // Otherwise we're dealing with a new movie
  return http.post(apiEndpoint, movie);
}
