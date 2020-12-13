import axios from 'axios';

import { SET_CHAIRS } from './types';
import { SET_LOADED } from './types';

export const fetchChairs = (category, sortBy) => (dispatch) => {
  axios
    .get(
      `
    http://localhost:3001/chairs
		?${category !== null ? `category=${category}` : ''}
		&_sort=${sortBy.type}&_order=${sortBy.order}
		`,
    )
    .then(({ data }) => dispatch(setChairs(data)));
};

export const setChairs = (items) => ({
  type: SET_CHAIRS,
  payload: items,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});
