// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeanbS9UhHohQQFI6WvcMlh5RaDVWvLrE",
  authDomain: "netflixgpt-fe5a1.firebaseapp.com",
  projectId: "netflixgpt-fe5a1",
  storageBucket: "netflixgpt-fe5a1.appspot.com",
  messagingSenderId: "226265851104",
  appId: "1:226265851104:web:19f66e3fe718871cd39c85",
  measurementId: "G-9P3XVBV819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();