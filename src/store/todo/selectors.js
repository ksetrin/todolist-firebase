import { createSelector } from 'reselect'

export const todoSelector = () => (state) => {
  // console.log('state', state.firestore.data.todo || {})
  return state.firestore.data.todo || {}
}

export const todoListSelector = () => createSelector(
  todoSelector(),
  (todo) => (todo && todo.tododoc && todo.tododoc.todo) || []
)
