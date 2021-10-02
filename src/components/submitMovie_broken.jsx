import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import DropDown from './common/dropdown';
import { getGenres } from '../services/fakeGenreService';

class SubmitMovieBroken extends Form {
  state = {
    data: {
      title: '',
      genre: '',
      numInStock: '',
      rating: null,
    },
    errors: {},
  };

  schema = {
    // username: Joi.string().required().label('Username'),
    // password: Joi.string().required().min(8).label('Password'),
    // name: Joi.string().required().label('Name'),
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().min(8).label('Genre'),
    numInStock: Joi.number().required().min(0).label('Number in Stock'),
    rating: Joi.number().required().min(0).max(10).label('Rating'),
  };

  // Old code
  // username = React.createRef();

  componentDidMount() {
    // Focuses on this field as soon as page/component loads
    // this.username.current.focus();
  }

  doSubmit = () => {
    // Call the server save changes and redirect user to different page
    // const username = this.username.current.value;
    console.log('Submitted');
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  render() {
    return (
      // TODO: in order to render DropDown, newMovieForm must extend Form...where the method lives.
      <div className='container col-xs-12 col-lg-6'>
        <h1>Add a movie</h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput('varToRead', 'DisplayName', 'DataTypeToValidate')} */}
          {this.renderInput('username', 'Title', 'email')}
          {/* {this.renderInput('password', 'Genre', 'password')} */}
          {/* {this.renderDropdown('genre', 'Choose a Genre', getGenres())} */}
          <DropDown
            name={'genres'}
            label={'Pick a genre'}
            data={('genreA', 'genreB', 'genreC')}
          />
          {this.renderInput('numInStock', 'Number in Stock')}
          {this.renderInput('rating', 'Rating')}
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default SubmitMovieBroken;
