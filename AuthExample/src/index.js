import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import requireAuth from './components/auth/require_auth';
import Feature from './components/feature';
import Welcome from './components/welcome';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//Auth on refresh
const token = localStorage.getItem("token");
if (token) 
  store.dispatch( {type: AUTH_USER} );

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
  	  <div>
  	    <Header/>
  	  	<Switch>
	  	  	<Route path='/signin' component={ SignIn }/>
          <Route path='/signout' component={ SignOut }/>
          <Route path='/signup' component={ SignUp }/>
          <Route path='/feature' component={ requireAuth(Feature)  }/>
	  	  	<Route path='/' component={ Welcome }/>
  	  	</Switch>
  	  </div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
