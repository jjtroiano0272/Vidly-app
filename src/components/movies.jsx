import React, { Component } from 'react';
import { getMovie, getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Dropdown from './common/dropdown';
import Pagination from './common/pagination';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: '',
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    // num pages should be based on num selectedmovies
    // Filter, sort, then paginate
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (moviesCount === 0) {
      return <p className='text-muted'>There are no movies!</p>;
    }

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className='row-md m-4'>
        <ListGroup
          items={this.state.genres}
          selectedItem={this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
        {/* <Dropdown
          label={'Pick a genre'}
          name={'genres'}
          options={this.state.genres}
        /> */}
        <h1>Movies Database</h1>
        <hr />
        {/* New Movie button */}
        <Link className='' to='/movies/new'>
          <button className='btn btn-primary'>New Movie</button>
        </Link>
        <p className='text-muted'>
          <small>
            {/* If 'All Genres' is selected it doesn't write the genre.
                  Otherwise it puts 'Showing {numb} {genre} movies */}
            Showing {totalCount}{' '}
            {selectedGenre.name !== 'All Genres' ? selectedGenre.name : ''}{' '}
            movies in the database
          </small>
        </p>
        <MoviesTable
          movies={movies}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
