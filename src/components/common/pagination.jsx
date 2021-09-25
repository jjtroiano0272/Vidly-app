import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// What data does this component need?
// What events will it raise
// Bootstrap pagination component

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  console.log('Current page', currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return pagesCount === 1 ? null : (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a onClick={() => onPageChange(page)} className='page-link'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  // props and types for our component and if they req'd
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
