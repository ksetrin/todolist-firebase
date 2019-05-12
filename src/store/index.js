import { combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import thunkMiddleware from 'redux-thunk'
import {
  todo,
} from './reducers'
import firebase from "../config/firestore";

const reducer = combineReducers({
  firestore: firestoreReducer,
  todo
})

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument({getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {})
  )
)


export default store
