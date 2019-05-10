import { createSelector } from 'reselect'

export const todoSelector = () => (state) => {
  return state.todo
}

export const todoListSelector = () => createSelector(
  todoSelector(),
  (todo) => todo.list
)
