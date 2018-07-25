import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'

export default createStore(
  combineReducers({
    colors
  }),
  applyMiddleware(thunk)
)
