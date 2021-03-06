import { SET_SORT_BY } from './types';
import { SET_CATEGORY } from './types';

export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});
