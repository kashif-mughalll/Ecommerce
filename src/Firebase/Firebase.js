import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAYUuCvCjTRUSJnRzwOWsAcCza-VM_9UiI",
  authDomain: "wallet-tracker-e50f1.firebaseapp.com",
  databaseURL: "https://wallet-tracker-e50f1.firebaseio.com",
  projectId: "wallet-tracker-e50f1",
  storageBucket: "wallet-tracker-e50f1.appspot.com",
  messagingSenderId: "225259020869",
  appId: "1:225259020869:web:81fe0e28ca506ab11b392c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
// export var storage = firebase.storage().ref();

export default firebase;
