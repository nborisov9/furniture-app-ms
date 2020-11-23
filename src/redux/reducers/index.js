import { combineReducers } from 'redux'

import { chairs } from './chairs'
import { filters } from './filters'

const rootReducer = combineReducers({
  chairs,
  filters,
})

export { rootReducer, filters }
