// //import Vue from "vue";
// import { firestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { firebase } from "firebase";

// import { getAnalytics } from "firebase/analytics";
// // import { getFirestore, collection, getDocs } from "firebase/firestore/file";
// // https://myportfolio-4e255.web.app/

// const settings = { timestampsInSnapshots: true };

// const firebaseConfig = {
//   apiKey: "AIzaSyBY-vSRQDTxFW5JK25tuVNxwwKMaNzDnvw",
//   authDomain: "myportfolio-4e255.firebaseapp.com",
//   databaseURL:
//     "https://myportfolio-4e255-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "myportfolio-4e255",
//   storageBucket: "myportfolio-4e255.appspot.com",
//   messagingSenderId: "256294304791",
//   appId: "1:256294304791:web:5c5c84595bcc552f8a3052",
//   measurementId: "G-SGVRYMQ8NH",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = firestore();

// db.settings({ timestampsInSnapshots: true });

// firebase.firestore().settings(settings);

// export default { firebase, analytics, firestore, app };

// // firebase.initializeApp(firebaseConfig);

// // firebase
// //   .firestore()
// //   .collection("test")
// //   .add({ test: "aaa" })
// //   .then((r) => console.log(r))
// //   .catch((e) => console.error(e));
