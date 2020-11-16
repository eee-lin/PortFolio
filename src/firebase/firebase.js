import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIHXXABV52LQFWiv8N1cP3OASrWqhEBvg",
  authDomain: "portfolio-4c466.firebaseapp.com",
  databaseURL: "https://portfolio-4c466.firebaseio.com",
  projectId: "portfolio-4c466",
  storageBucket: "portfolio-4c466.appspot.com",
  messagingSenderId: "638276239889",
  appId: "1:638276239889:web:284b57e8e364258ac427b0",
  measurementId: "G-7D8PG7QFQZ",
}

firebase.initializeApp(firebaseConfig)

export default firebase
export const functions = firebase.functions()
// const app = firebase.initializeApp(firebaseConfig)

// export default app.firestore()
// export default app.storage()
