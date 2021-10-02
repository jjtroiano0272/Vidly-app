import React, { Component } from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className='form-control' />
      {error && <div className='alert alert-danger o-80'>{error}</div>}
    </div>
  );
};

export default Input;
