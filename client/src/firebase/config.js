// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkiNL_zvhXwlSEjtl0B8re6GNGbX7GuNA",
  authDomain: "chatthree-fa75b.firebaseapp.com",
  projectId: "chatthree-fa75b",
  storageBucket: "chatthree-fa75b.appspot.com",
  messagingSenderId: "493017178198",
  appId: "1:493017178198:web:68c77cc9a4e3a612b5dbf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };