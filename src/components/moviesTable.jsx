import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import auth from '../services/authService';
// HOW TO USE FONTAWESOME WITH REACT
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Table from './common/table';
// import sort icon
// outline when unliked, solid when liked

class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title} </Link>
      ),
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: 'delete',
    content: (movie) => (
      <button
        className='btn btn-danger btn-sm'
        onClick={() => this.props.onDelete(movie)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { columns } = this;
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
