const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const filterDataByPath = (obj, path) => {
  const [firstKey, ...keys] = path.split('.')
  return keys.reduce((value, key) => {
    return value[key]
  }, obj[firstKey])
}

const getTotalData = (obj, path) => {
  return Object.values(obj).reduce((total, obj) => {
    const value = filterDataByPath(obj, path) + total
    return value
  }, 0)
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAIRS_CART': {
      const currentChairsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentChairsItems,
          totalPrice: currentChairsItems.reduce((total, obj) => total + obj.price, 0),
        },
      }

      const totalPrice = getTotalData(newItems, 'totalPrice')
      const totalCount = getTotalData(newItems, 'items.length')

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      }
    }
    default:
      return state
  }
}
