
import * as firebase from 'firebase/app';
import 'firebase/storage';//store images
import 'firebase/firestore';//db

var firebaseConfig = {
    apiKey: "AIzaSyD4TBuhiMA0lkn2Gp87M7HNUs56QKTzJMY",
    authDomain: "photogal-7f5f6.firebaseapp.com",
    databaseURL: "https://photogal-7f5f6.firebaseio.com",
    projectId: "photogal-7f5f6",
    storageBucket: "photogal-7f5f6.appspot.com",
    messagingSenderId: "261311668120",
    appId: "1:261311668120:web:4523f8c19e519e92e155ed",
    measurementId: "G-FSLWNC6SS3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};