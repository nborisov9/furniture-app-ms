import { combineReducers } from 'redux';

import { chairs } from './chairs';
import { filters } from './filters';
import { cart } from './cart';

const rootReducer = combineReducers({
  chairs,
  filters,
  cart,
});

export { rootReducer, filters };
