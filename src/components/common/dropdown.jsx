// Soluton courtesy FotisTsakiris @
// https://stackoverflow.com/questions/62974380/invalid-schema-content-error-for-drop-down-list-in-react

import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';

// const Dropdown = ({ error, label, name, options, ...rest }) => {
//   return (
//     <div>
//       <div>{label}</div>
//       <select
//         {...rest}
//         name={name}
//         className='custom-select'
//         id='inputGroupSelect04'
//       >
//         <option selected>Select a genre</option>
//         {options.map((option) => (
//           <option value={option}>{option}</option>
//         ))}
//       </select>
//       {error && <div className='alert alert-danger'>{error}</div>}
//     </div>
//   );
// };

const Dropdown = ({
  label,
  name,
  defaultMessage,
  items,
  textProperty,
  valueProperty,
}) => {
  return (
    <div>
      <div>{label}</div>
      <select name={name} className='custom-select' id='inputGroupSelect04'>
        <option selected>{defaultMessage}</option>
        {items.map((item) => (
          <option
            // value={item}
            key={item[valueProperty]}
          >
            {item[textProperty]}
          </option>
        ))}
      </select>
      {/* It's a drop down box not a free-form input so error doesn't make sense. */}
      {/* {error && <div className='alert alert-danger'>{error}</div>} */}
    </div>
  );
};

Dropdown.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default Dropdown;
