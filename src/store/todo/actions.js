// import { getFirestore } from 'redux-firestore'

export const TODO_FETCH = 'todo/fetch'

export const todoAddAction = (todo) => async (dispatch) => {
  // todoRef.push().set(todo);
};

export const todoDeleteAction = (todoID) => async (dispatch) => {
  // todoRef.child(todoID).remove();
};
// db.child("lastTaskUpdates").orderByChild("lastUpdate").limitToLast(10)
export const todoFetchAction = () => async (dispatch, getState, {getFirestore}) => {



  const firebase = getFirestore()


  firebase.get('tododoc').then((res) => {
    console.log('get', res)
  })

  // firebase.collection('todo').doc('tododoc').then((res) => {
  //   console.log('collection', res)
  // })

  // firebase.collection('todo').path('todofield').then((res) => {
  //   console.log('path', res)
  // })

  // firebase ('tododoc').then((res) => {
  //   console.log('collection', res)
  // })


  // firebase
  //   .collection('todo')
  //   .add({text: '111'})
  //   .then(() => {
  //     console.log('!!!')
  //   })


  // todoRef.on("value", (snapshot) => {
  //
  //   const result = snapshot.val() || {}
  //
  //   // console.log('todoFetchAction', result)
  //
  //   const list = Object.entries(result)
  //     .map((item) => ({key: item[0], ...item[1]}))
  //     .sort((a, b) => (a.order - b.order))
  //
  //   // console.log('list', list)
  //
  //   dispatch({
  //     type: TODO_FETCH,
  //     payload: list
  //   });
  // });
};
