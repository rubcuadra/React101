import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import requireAuth from './components/hoc/require_auth';

import App from './components/app';
import Resources from './components/resources';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
  	  <div>
        <App/>
  	  	<Switch>
	  	  	<Route path='/resources' component={ requireAuth(Resources) }/>
  	  	</Switch>
  	  </div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
