import { combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({

})

const initialState = {
  todo: [
    {id: 'aaa', text: 'aaa'},
    {id: 'bbb', text: 'bbb'},
    {id: 'ccc', text: 'ccc'},
  ]
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)


export default store
