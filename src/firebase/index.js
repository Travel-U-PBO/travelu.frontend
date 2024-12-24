// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrAv4RIao2EM2d8OVYBgs13II0RN_eLe0",
  authDomain: "travel-u.firebaseapp.com",
  projectId: "travel-u",
  storageBucket: "travel-u.firebasestorage.app",
  messagingSenderId: "658001065610",
  appId: "1:658001065610:web:1bbf90343a8acee1e4df73",
  measurementId: "G-5P2Z2HGENR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
