import React from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';

const NavBar = ({ user }) => {
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
    // TODO: Dynamically named opacity class
    <nav className='navbar navbar-expand-lg navbar-light bg-light o-80'>
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
          {/* No user logged in */}
          {!user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/login'>
                Login
              </NavLink>
              <NavLink className='nav-item nav-link' to='/register'>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {/* For when we DO have a user */}
          {user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/profile'>
                {/* {user.name} */}
                My Profile
              </NavLink>
              <NavLink className='nav-item nav-link' to='/logout'>
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
      {/* </Switch> */}
    </nav>
  );
};

export default NavBar;
