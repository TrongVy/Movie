import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'store'
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider >
  </React.StrictMode >

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
