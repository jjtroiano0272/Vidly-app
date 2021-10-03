import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };

  // Van Halen M&M
  // Van Halens
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(8).label('Password'),
    name: Joi.string().required().label('Name'),
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
      <div className='container col-xs-12 col-lg-6'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
