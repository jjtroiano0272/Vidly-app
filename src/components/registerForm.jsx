import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import * as userService from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(8).label('Password'),
    name: Joi.string().required().label('Name'),
  };

  componentDidMount() {
    // Focuses on this field as soon as page/component loads
    // TODO:
    // this.username.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  // prettier-ignore
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJWT(response.headers['x-auth-token']);
      window.location = '/';
    } 
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
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
