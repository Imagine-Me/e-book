import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './layout/Home/Home'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


