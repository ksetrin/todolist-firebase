export const TODO_ADD = 'todo/add'
export const modalsClearAction = (data) => async (dispatch) => {
  dispatch({ type: TODO_ADD, data })
}
