import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGc9JVfSozBd3N4Ci2COXJnSm8mnNni-k",
  authDomain: "uberears-59d64.firebaseapp.com",
  projectId: "uberears-59d64",
  storageBucket: "uberears-59d64.appspot.com",
  messagingSenderId: "391670532668",
  appId: "1:391670532668:web:8b62fd8aa0abb596379139",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
