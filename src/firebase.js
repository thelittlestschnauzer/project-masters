import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA72BBORjPA7h61U82-Q0_BSHEv4AxOKqk",
  authDomain: "project-masters-4088e.firebaseapp.com",
  databaseURL: "https://project-masters-4088e.firebaseio.com",
  projectId: "project-masters-4088e",
  storageBucket: "project-masters-4088e.appspot.com",
  messagingSenderId: "754431297477",
  appId: "1:754431297477:web:84359d5d2e61522275adac"
});


export { firebaseConfig as firebase };