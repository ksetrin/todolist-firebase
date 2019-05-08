export const TODO_ADD = 'todo/add'
export const todoAddAction = (data) => async (dispatch) => {
  dispatch({ type: TODO_ADD, data })
}
