import firebase from "firebase";

export const todoAddAction = (todo) => async (dispatch, getState, {getFirestore}) => {
  try {
    const firestore = getFirestore();
    await firestore.collection('todo').doc('tododoc').update({
      todo: firebase.firestore.FieldValue.arrayUnion(todo)
    })
  } catch (e) {
    console.log('error', e)
  }
};

export const todoUpdateAction = (todolist) => async (dispatch, getState, {getFirestore}) => {
  try {
    const firestore = getFirestore();
    await firestore.collection('todo').doc('tododoc').update({
      todo: todolist
    })
  } catch (e) {
    console.log('error', e)
  }
};

export const todoDeleteAction = (todo) => async (dispatch, getState, {getFirestore}) => {
  try {
    const firestore = getFirestore();
    await firestore.collection('todo').doc('tododoc').update({
      todo: firebase.firestore.FieldValue.arrayRemove(todo)
    })
  } catch (e) {
    console.log('error', e)
  }
};
