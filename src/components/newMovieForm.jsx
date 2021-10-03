import React, { Component } from 'react';
import { getGenres, genres } from '../services/fakeGenreService';
import Joi from 'joi-browser';
import DropDown from './common/dropdown';
import ListGroup from './common/listGroup';
import Form from './common/form';

class NewMovieForm extends Form {
  state = {
    data: { title: '', genre: '', numInStock: null, rating: null },
    errors: {},
    genres: [],
  };

  // Van Halen MnMs2
  schema = {
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().label('Genre'),
    numInStock: Joi.number().required().min(0).label('Number in Stock'),
    rating: Joi.number().required().min(0).max(10).label('Rating'),
  };

  componentDidMount() {
    console.log('NewMovieForm genres mounted!');
    // const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // const genres = [...getGenres()];
    this.setState({ genres: getGenres() });

    // console.log(genres.forEach(callbackfn));
    genres.forEach((item) => console.log(item.name));
  }

  doSubmit = () => {
    // Call the server save changes and redirect user to different page
    // const username = this.username.current.value;
    console.log('New movie submitted!');
  };

  // TODO: Extract this functionality out into Form.jsx
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  render() {
    return (
      <div className='container col-xs-12 col-lg-6'>
        <h1>Add a movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderDropdown(['a', 'b', 'c'], 'Genre', 'genre')}
          {/* {this.renderDropdown(this.state.genres, 'Genre', 'genre')} */}
          {this.renderInput('numInStock', 'Quantity')}
          {this.renderInput('rating', 'Rating')}
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
