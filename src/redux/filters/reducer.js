import { SET_SORT_BY } from './types';
import { SET_CATEGORY } from './types';

const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};

const handlers = {
  [SET_SORT_BY]: (state, action) => ({ ...state, sortBy: action.payload }),
  [SET_CATEGORY]: (state, action) => ({ ...state, category: action.payload }),
};

export const filters = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
