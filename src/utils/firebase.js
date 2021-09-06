import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // use process.env.REACT_APP stuff instead to hide keys
  apiKey: "AIzaSyBzTEbibp7eFGVTxFnjC5ONgiqUUMo74uQ",
  authDomain: "fir-auth-626a2.firebaseapp.com",
  projectId: "fir-auth-626a2",
  storageBucket: "fir-auth-626a2.appspot.com",
  messagingSenderId: "941212938208",
  appId: "1:941212938208:web:e22079aa26f605d8440585",
  measurementId: "G-H8MZ8PHLR4"
})

export const auth = app.auth();
export default app;