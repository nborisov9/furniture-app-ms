import { ADD_CHAIRS_CART } from './types';
import { CLEAR_CART } from './types';
import { REMOVE_CART_ITEM } from './types';
import { MINUS_CART_ITEM } from './types';
import { PLUS_CART_ITEM } from './types';
import { getTotalData, getTotalPrice } from './utils';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const handlers = {
  [ADD_CHAIRS_CART]: (state, action) => {
    const currentChairsItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload];

    const newItems = {
      ...state.items,
      [action.payload.id]: {
        items: currentChairsItems,
        totalPrice: currentChairsItems.reduce((total, obj) => total + obj.price, 0),
      },
    };

    const totalPrice = getTotalData(newItems, 'totalPrice');
    const totalCount = getTotalData(newItems, 'items.length');

    return {
      ...state,
      items: newItems,
      totalPrice,
      totalCount,
    };
  },
  [REMOVE_CART_ITEM]: (state, action) => {
    const newItems = { ...state.items };
    const currentTotalPrice = newItems[action.payload].totalPrice;
    const currentTotalCount = newItems[action.payload].items.length;
    delete newItems[action.payload];

    return {
      ...state,
      items: newItems,
      totalPrice: state.totalPrice - currentTotalPrice,
      totalCount: state.totalCount - currentTotalCount,
    };
  },
  [PLUS_CART_ITEM]: (state, action) => {
    const newObjItems = [
      ...state.items[action.payload].items,
      state.items[action.payload].items[0],
    ];

    const newItems = {
      ...state.items,
      [action.payload]: {
        items: newObjItems,
        totalPrice: getTotalPrice(newObjItems),
      },
    };

    const totalPrice = getTotalData(newItems, 'totalPrice');
    const totalCount = getTotalData(newItems, 'items.length');

    return {
      ...state,
      items: newItems,
      totalPrice,
      totalCount,
    };
  },
  [MINUS_CART_ITEM]: (state, action) => {
    const oldItems = state.items[action.payload].items;
    const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

    const newItems = {
      ...state.items,
      [action.payload]: {
        items: newObjItems,
        totalPrice: getTotalPrice(newObjItems),
      },
    };

    const totalPrice = getTotalData(newItems, 'totalPrice');
    const totalCount = getTotalData(newItems, 'items.length');

    return {
      ...state,
      items: newItems,
      totalPrice,
      totalCount,
    };
  },
  [CLEAR_CART]: () => ({ items: {}, totalPrice: 0, totalCount: 0 }),
};

export const cart = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
