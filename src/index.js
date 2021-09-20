import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from 'store'
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider >
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
