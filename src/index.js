import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import reducers from './reducers';
import Routes from './routes';
import './assets/css/app.css';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Routes store={store} />
    </Provider>
  </Router>,

  document.getElementById('root'),
);
