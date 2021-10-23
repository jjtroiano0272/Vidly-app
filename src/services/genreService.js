import http from './httpService';
// import { apiURL } from '../config.json';

// In order to use filter() genres MUST be an array
export function getGenres() {
  return http.get('/genres');
}
