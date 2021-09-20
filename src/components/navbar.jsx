import React, { Component } from 'react';

// Stateless function Component (using function to define a componetn rather than class)
const NavBar = (props) => {
  console.log('NavBar - rendered');

  return (
    <nav className='navbar navbar-light bg-light'>
      <a href='#' className='navbar-brand'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
