import React, { Component } from 'react';
import { getMovie, getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import Like from './common/like';
import Pagination from './common/pagination';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
// HOW TO USE FONTAWESOME WITH REACT
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
// outline when unliked, solid when liked

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    // TODO: Make ternary
    if (moviesCount === 0) {
      return (
        <React.Fragment>
          <p className='text-muted'>There are no movies!</p>
        </React.Fragment>
      );
    }

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <h1>Movies Database</h1>
        <p className='text-muted'>
          showing {moviesCount} movies in the database
        </p>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>{/* Column for like */}</th>
              <th>{/* Column for delete */}</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                {/* Like button */}
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                {/* Delete button */}
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => this.handleDelete(movie)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={moviesCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
