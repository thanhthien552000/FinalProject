// Your web app's Firebase configuration
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCIJrlDaHv47wm9t5vsawmwlXX6h3zub3A",
  authDomain: "finalproject-263c3.firebaseapp.com",
  projectId: "finalproject-263c3",
  databaseURL: "https://finalproject-263c3.firebaseio.com",
  storageBucket: "finalproject-263c3.appspot.com",
  messagingSenderId: "722608939218",
  appId: "1:722608939218:web:d01c1fbb182aa1c4b18d0b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
