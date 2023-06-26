import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5SMXcEwmgLqL-LAHZhtmXmJqX3UdflKs",
  authDomain: "twitter-clone-361cd.firebaseapp.com",
  projectId: "twitter-clone-361cd",
  storageBucket: "twitter-clone-361cd.appspot.com",
  messagingSenderId: "517883595454",
  appId: "1:517883595454:web:f858eef582f3ba5ba7ecef",
  measurementId: "G-XB0F3D0KB8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
