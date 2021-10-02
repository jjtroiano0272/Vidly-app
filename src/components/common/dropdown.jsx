// Soluton courtesy FotisTsakiris @
// https://stackoverflow.com/questions/62974380/invalid-schema-content-error-for-drop-down-list-in-react

import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';

const Dropdown = ({ error, label, name, options, ...rest }) => {
  return (
    <div>
      <div>{label}</div>
      <select
        {...rest}
        name={name}
        className='custom-select'
        id='inputGroupSelect04'
      >
        <option selected>Select a genre</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Dropdown;
