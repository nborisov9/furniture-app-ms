import { ADD_CHAIRS_CART } from '../action-types/cart';
import { CLEAR_CART } from '../action-types/cart';
import { REMOVE_CART_ITEM } from '../action-types/cart';
import { MINUS_CART_ITEM } from '../action-types/cart';
import { PLUS_CART_ITEM } from '../action-types/cart';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const _filterDataByPath = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((value, key) => {
    return value[key];
  }, obj[firstKey]);
};

const getTotalData = (obj, path) => {
  return Object.values(obj).reduce((total, obj) => {
    const value = _filterDataByPath(obj, path) + total;
    return value;
  }, 0);
};

const getTotalPrice = (arr) => arr.reduce((total, { price }) => total + price, 0);

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAIRS_CART: {
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
    }

    case CLEAR_CART: {
      return { items: {}, totalPrice: 0, totalCount: 0 };
    }

    case REMOVE_CART_ITEM: {
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
    }

    case PLUS_CART_ITEM: {
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
    }

    case MINUS_CART_ITEM: {
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
    }

    default:
      return state;
  }
};
