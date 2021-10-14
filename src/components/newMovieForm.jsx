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

  // prettier-ignore
  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    genre: Joi.string()
      .required()
      .label('Genre'),
    numInStock: Joi.number()
      .required()
      .min(0)
      .label('Number in Stock'),
    rating: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Rating'),
  };

  componentDidMount() {
    console.log('NewMovieForm genres mounted!');
    // const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // const genres = [...getGenres()];
    this.setState({ genres: getGenres() });
  }

  doSubmit = () => {
    // Call the server save changes and redirect user to different page
    // const username = this.username.current.value;
    console.log('New movie submitted!');
  };

  render() {
    const { genres } = this.state;

    return (
      <div className='container col-xs-12 col-lg-6'>
        <h1>Add a movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genre', 'Genre', genres)}
          {this.renderInput('numInStock', 'Quantity')}
          {this.renderInput('rating', 'Rating')}
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
