import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAMq4kGGThHv54NBvlpCKy4oUdBhW3ZPBM",
  authDomain: "evernote-clone-7e3b6.firebaseapp.com",
  projectId: "evernote-clone-7e3b6",
  storageBucket: "evernote-clone-7e3b6.appspot.com",
  messagingSenderId: "671610221708",
  appId: "1:671610221708:web:98734846f9b39f971fb7a9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
