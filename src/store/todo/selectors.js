import { createSelector } from 'reselect'

export const todoSelector = () => (state) => {
  return state.firestore.data.todo || {}
}

export const todoListSelector = () => createSelector(
  todoSelector(),
  (todo) => (todo && todo.tododoc && todo.tododoc.todo) || []
)
