import { SET_CHAIRS } from '../action-types/chairs'
import { SET_LOADED } from '../action-types/chairs'

const initialState = {
  items: [],
  isLoaded: false,
}

const chairs = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAIRS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      }

    default:
      return state
  }
}

export { chairs }
