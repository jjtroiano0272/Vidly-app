import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';
import Joi from 'joi-browser';
import Input from './input';
import Dropdown from './dropdown';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    // Whatever name is at run time will be used to set the key
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // If the error is in the username field
    // if the name of the input field is username we set the username prop of the errors object
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        // type='submit'
        className='btn btn-primary'
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  }

  // TODO: This is the one in progress
  renderDropdown(label, name, defaultMessage, items) {
    const { data, errors } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      // label,
      // name,
      // defaultMessage,
      // items,
      // textProperty,
      // valueProperty,
      <Dropdown
        label={label}
        name={name}
        defaultMessage={defaultMessage}
        items={items}
        // options={options}
        // label={label}
        // name={name}
        // defaultMessage={defaultMessage}
        // error={errors[name]}
        // value={data[name]}
        onChange={handleChange}
      />
    );
  }
}

export default Form;
