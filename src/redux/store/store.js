import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducers from '../reducers/coutriesReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(countriesReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;