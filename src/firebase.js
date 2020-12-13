// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBdXX17EDOtFImbS_dikaoot-8vwBbYbE",
  authDomain: "todo-app-cp-24416.firebaseapp.com",
  projectId: "todo-app-cp-24416",
  storageBucket: "todo-app-cp-24416.appspot.com",
  messagingSenderId: "617211174236",
  appId: "1:617211174236:web:5ca6219d9cd88205fa7599",
  measurementId: "G-0K7EZ8J7ED",
});

const db = firebase.firestore();

export default db;
