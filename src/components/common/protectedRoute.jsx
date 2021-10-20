import React, { Component } from 'react';
import auth from '../../services/authService';
import { Route, Redirect } from 'react-router-dom';
import { log } from 'joi-browser';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        if (!auth.getCurrentUser())
          // prettier-ignore
          return (
            <Redirect to={{ 
              pathname: '/login', 
              state: { from: props.location } 
            }} />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
