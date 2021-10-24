import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
// TODO: May not be necessary...
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';

console.log('SUPERMAN', process.env.REACT_APP_NAME);

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
