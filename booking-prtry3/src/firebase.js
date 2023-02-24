import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYmVImmOWD09z9jE4derRlZ_I7_8s136w",
  authDomain: "bookingpr-6fec3.firebaseapp.com",
  databaseURL: "https://bookingpr-6fec3-default-rtdb.firebaseio.com",
  projectId: "bookingpr-6fec3",
  storageBucket: "bookingpr-6fec3.appspot.com",
  messagingSenderId: "186983162114",
  appId: "1:186983162114:web:8d06369d95da661424a21b",
  measurementId: "G-L38ZXR0BL5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
