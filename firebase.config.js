// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4kL-Tyf_8sAj2YYWA_bCfuamILkKX-Q",
  authDomain: "a11-food-campagin-auth.firebaseapp.com",
  projectId: "a11-food-campagin-auth",
  storageBucket: "a11-food-campagin-auth.appspot.com",
  messagingSenderId: "828301398746",
  appId: "1:828301398746:web:8ce6e175a1e9e236044be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;