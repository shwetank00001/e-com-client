import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


import {createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
 
    </BrowserRouter>
  </React.StrictMode>
);

