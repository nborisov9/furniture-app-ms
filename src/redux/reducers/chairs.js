const initialState = {
  items: [],
  isLoaded: false,
}

const chairs = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHAIRS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }

    default:
      return state
  }
}

export { chairs }
