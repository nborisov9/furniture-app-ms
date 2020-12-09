import { SET_SORT_BY } from '../action-types/filters';
import { SET_CATEGORY } from '../action-types/filters';

export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});
