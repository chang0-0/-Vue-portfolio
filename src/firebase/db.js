import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY-vSRQDTxFW5JK25tuVNxwwKMaNzDnvw",
  authDomain: "myportfolio-4e255.firebaseapp.com",
  databaseURL:
    "https://myportfolio-4e255-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myportfolio-4e255",
  storageBucket: "myportfolio-4e255.appspot.com",
  messagingSenderId: "256294304791",
  appId: "1:256294304791:web:5c5c84595bcc552f8a3052",
  measurementId: "G-SGVRYMQ8NH",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
