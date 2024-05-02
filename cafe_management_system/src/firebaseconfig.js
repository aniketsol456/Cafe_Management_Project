// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy9VoxXSKFLuiEu7rHkn29p243SaU3jsc",
  authDomain: "cafemanage-8e5e9.firebaseapp.com",
  projectId: "cafemanage-8e5e9",
  storageBucket: "cafemanage-8e5e9.appspot.com",
  messagingSenderId: "483134537905",
  appId: "1:483134537905:web:6ed40011e64425e862e290",
  measurementId: "G-VXDKESYRXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);