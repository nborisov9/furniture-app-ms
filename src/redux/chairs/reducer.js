import { SET_CHAIRS, SET_LOADED } from './types';

const initialState = {
  items: [],
  isLoaded: false,
};

const handlers = {
  [SET_CHAIRS]: (state, action) => ({
    ...state,
    items: action.payload,
    isLoaded: true,
  }),
  [SET_LOADED]: (state, action) => ({
    ...state,
    isLoaded: action.payload,
  }),
};

export const chairs = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
