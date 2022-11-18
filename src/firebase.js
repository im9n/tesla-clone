// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3jDgqRSRScI8L8MOV0VNalOplQgZeds0",
  authDomain: "tesla-clone-4fb62.firebaseapp.com",
  projectId: "tesla-clone-4fb62",
  storageBucket: "tesla-clone-4fb62.appspot.com",
  messagingSenderId: "518179085728",
  appId: "1:518179085728:web:fe1dab520ae4db827b98c5",
  measurementId: "G-D0YNEXB6DX"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth()

export default auth