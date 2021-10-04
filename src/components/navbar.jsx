import React from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';

const NavBar = () => {
  {
    /* for products detail page */
  }
  {
    /* <Route path='/products/:id' component={ProductDetails} />
    <Route path='/products' component={Products} />
    <Route path='/posts/:year?/:month?' component={Posts} />
    <Route path='/admin' component={Dashboard} />
    <Redirect from='/messages' to='/posts' />
    <Route path='/not-found' component={NotFound} />
    <Route path='/' exact component={Home} /> */
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      {/* <Switch> */}
      <Link className='navbar-brand' to='/'>
        Vidly
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        // data-target='#navbarSupportedContent'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink>
          <NavLink className='nav-item nav-link' to='/login'>
            Login
          </NavLink>
          <NavLink className='nav-item nav-link' to='/register'>
            Register
          </NavLink>
        </div>
      </div>
      {/* </Switch> */}
    </nav>
  );
};

export default NavBar;
