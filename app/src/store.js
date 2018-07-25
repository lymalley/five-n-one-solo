import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'

export default createStore(
  combineReducers({
    colors,
    currentColor
  }),
  applyMiddleware(thunk)
)
