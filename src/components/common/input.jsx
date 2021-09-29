import React, { Component } from 'react';

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className='form-control'
      />
      {error && <div className='alert alert-danger o-80'>{error}</div>}
    </div>
  );
};

export default Input;
