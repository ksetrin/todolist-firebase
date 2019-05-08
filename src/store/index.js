import { combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {
  todo,
} from './reducers'

const reducer = combineReducers({
  todo
})

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)


export default store
