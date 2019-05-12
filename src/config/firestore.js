import firebase from "firebase";

import { firebaseConfig } from "./keys";

firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({});
export default firebase
