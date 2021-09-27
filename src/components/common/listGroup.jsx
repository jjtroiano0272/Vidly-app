import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className='list-group cursor-pointer clickable col-xs-12 col-sm-12 mb-3 d-flex'>
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? 'list-group-item list-group-item-action active'
              : 'list-group-item list-group-item-action'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
