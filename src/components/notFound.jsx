import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container h-100'>
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='col my-auto text-center'>
          <h1>Ya Done Goofed!</h1>
          <p className='mb-5'>
            Ain't shit changed, but also <strong>ain't shit found</strong>
          </p>
          <Link className='btn btn-primary btn-lg' to='/' role='button'>
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
