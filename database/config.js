import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWZe6MRwO6IncKBnnjul3C4K4t1NfZi4",
  authDomain: "startup-5d5bf.firebaseapp.com",
  projectId: "startup-5d5bf",
  storageBucket: "startup-5d5bf.appspot.com",
  messagingSenderId: "77472106362",
  appId: "1:77472106362:web:1c860bd5096d139e3038c3",
  measurementId: "G-H682B6YND9"
};

// if (!firebase.apps.length) {
//   const app = firebase.initializeApp(firebaseConfig);
//   // const db = getFirestore(app);
// }

// intialize firebase
const app = firebase.initializeApp(firebaseConfig);

// intialized Cloud Direstore
const db = getFirestore(app);


export { firebase };