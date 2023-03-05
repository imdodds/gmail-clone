import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJF1mL-P7f-hs0h3-8zWNO7ODgytdGno4",
  authDomain: "clone-b7214.firebaseapp.com",
  projectId: "clone-b7214",
  storageBucket: "clone-b7214.appspot.com",
  messagingSenderId: "268170237145",
  appId: "1:268170237145:web:eb4da6ac782fc744661ac8",
  measurementId: "G-1W8G16CFSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider

export { db, auth, provider };