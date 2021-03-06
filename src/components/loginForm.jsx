import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from './common/form';
import Joi from 'joi-browser';
import auth from '../services/authService';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(8).label('Password'),
  };

  // Old code
  // username = React.createRef();

  componentDidMount() {
    // Focuses on this field as soon as page/component loads
    // this.username.current.focus();
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      // prettier-ignore
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  // prettier-ignore
  render() {
    if (auth.getCurrentUser()) { return <Redirect to='/' />; }

    return (
      <div className='container col-xs-12 col-lg-6'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
