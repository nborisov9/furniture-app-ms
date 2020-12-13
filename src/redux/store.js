import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import { chairs } from './chairs';
import { filters } from './filters';
import { cart } from './cart';

const rootReducer = combineReducers({
  chairs,
  filters,
  cart,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { store };
