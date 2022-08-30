import firebase from "firebase/compat/app"
import { getDatabase } from "firebase/database"

// setup the app
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6CPsuTPl2FHicQ5ST1uHKyXAVi9CZB-s",
  authDomain: "shield-app-f46e8.firebaseapp.com",
  databaseURL: "https://shield-app-f46e8-default-rtdb.firebaseio.com",
  projectId: "shield-app-f46e8",
  storageBucket: "shield-app-f46e8.appspot.com",
  messagingSenderId: "407679746017",
  appId: "1:407679746017:web:1cb9d5dff015b6420adca0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = getDatabase();


export { app, db };