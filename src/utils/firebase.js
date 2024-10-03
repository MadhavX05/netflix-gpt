// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUlcNKl-AcsZvv1MSKkltRqquegUEqz-8",
  authDomain: "netflixgpt-x07.firebaseapp.com",
  projectId: "netflixgpt-x07",
  storageBucket: "netflixgpt-x07.appspot.com",
  messagingSenderId: "428599643925",
  appId: "1:428599643925:web:1efab7e35d1686d552231c",
  measurementId: "G-JJ5SDJ002H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
