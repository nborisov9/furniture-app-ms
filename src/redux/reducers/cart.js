const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
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

      const totalPrice = Object.keys(newItems).reduce(
        (total, id) => total + newItems[id].totalPrice,
        0,
      )
      const totalCount = Object.keys(newItems).reduce(
        (total, id) => total + newItems[id].items.length,
        0,
      )

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
