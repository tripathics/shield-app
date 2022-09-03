// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgXnC7tll82Z3bWT1KOvowUUhJhB7hkpM",
//   authDomain: "shield-test-cd83c.firebaseapp.com",
//   databaseURL: "https://shield-test-cd83c-default-rtdb.firebaseio.com",
//   projectId: "shield-test-cd83c",
//   storageBucket: "shield-test-cd83c.appspot.com",
//   messagingSenderId: "755104628537",
//   appId: "1:755104628537:web:565197edbbe96121ee32e8",
//   measurementId: "G-F8CN10PFT8"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBUZwE1Rs9TVattFujK7_bcap55vAUJ3Ow",
  authDomain: "shield-iit-sep-2.firebaseapp.com",
  databaseURL: "https://shield-iit-sep-2-default-rtdb.firebaseio.com",
  projectId: "shield-iit-sep-2",
  storageBucket: "shield-iit-sep-2.appspot.com",
  messagingSenderId: "530078331294",
  appId: "1:530078331294:web:4d61da740b514a6510668f",
  measurementId: "G-QB5MDK72RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database as db, auth }