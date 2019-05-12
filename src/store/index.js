import { combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reduxFirestore, firestoreReducer, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase'
import thunkMiddleware from 'redux-thunk'
import {
  todo,
} from './reducers'
import firebase from "../config/firestore";

const reducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  todo
})

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument({
      getFirebase,
      getFirestore
    })),
    reactReduxFirebase(firebase, {}),
    reduxFirestore(firebase),
  )
)


export default store
