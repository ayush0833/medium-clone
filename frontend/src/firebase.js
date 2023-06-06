// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtTOl5exni8suq128jVbOyevTJJ3KcyLY",
  authDomain: "endtermsem6.firebaseapp.com",
  projectId: "endtermsem6",
  storageBucket: "endtermsem6.appspot.com",
  messagingSenderId: "527243025740",
  appId: "1:527243025740:web:b61ed1fd81162cb5a903e9",
  measurementId: "G-P9L3QYN8CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()

export { auth, provider }