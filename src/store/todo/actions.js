import { todoRef } from "../../config/firebase";
export const TODO_FETCH = 'todo/fetch'

export const todoAddAction = (todo) => async (dispatch) => {
  todoRef.push().setWithPriority(todo, -new Date().getTime() - 10000);
};

export const todoDeleteAction = (todoID) => async (dispatch) => {
  todoRef.child(todoID).remove();
};

export const todoFetchAction = () => async (dispatch) => {
  todoRef.on("value", (snapshot) => {

    const result = snapshot.val()
    // console.log('ddd', result)
    const list = Object.entries(result).map((item) => ({key: item[0], ...item[1]}))
    // console.log('list', list)

    dispatch({
      type: TODO_FETCH,
      payload: list
    });
  });
};
